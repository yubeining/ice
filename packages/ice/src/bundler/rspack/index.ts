import type { MultiCompiler, Compiler, rspack as Rspack } from '@rspack/core';
import type { RspackDevServer } from '@rspack/dev-server';
import { logger } from '../../utils/logger.js';
import type { BundlerOptions, Context } from '../types.js';
import { WEB } from '../../constant.js';
import getConfig, { getDataLoaderConfig } from './getConfig.js';
import start from './start.js';
import build from './build.js';

async function bundler(
  context: Context,
  options: BundlerOptions,
) {
  const { command } = context;
  const {
    taskConfigs,
    hooksAPI,
    routeManifest,
    appConfig,
  } = options;
  let compiler: MultiCompiler;
  let dataLoaderCompiler;
  let devServer: RspackDevServer;
  const { rspack } = await import('@ice/bundles/esm/rspack.js');
  // Override the type of rspack, because of rspack is imported from pre-compiled bundle.
  const rspackConfigs = await getConfig(context, options, rspack as unknown as typeof Rspack);
  const dataLoaderRspackConfig = await getDataLoaderConfig(context, taskConfigs.find(({ name }) => name === WEB), rspack as unknown as typeof Rspack);
  console.log('dataLoaderRspackConfig', dataLoaderRspackConfig);
  try {
    // @ts-ignore
    compiler = rspack(rspackConfigs);
    // @ts-ignore
    dataLoaderCompiler = rspack(dataLoaderRspackConfig);
  } catch (error) {
    logger.error('Webpack compile error.');
    logger.error(error);
  }
  const buildOptions = {
    context,
    compiler,
    routeManifest,
    appConfig,
    hooksAPI,
    taskConfigs,
    rspackConfigs,
  };
  if (command === 'start') {
    // @ts-expect-error dev-server has been pre-packed, so it will have different type.
    devServer = await start(buildOptions, dataLoaderCompiler);
  } else if (command === 'build') {
    await build(buildOptions);
  }
  return { compiler, devServer };
}


export default bundler;
