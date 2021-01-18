/*
 * @Autor: zjq
 * @Description: 
 * @Version: 1.0
 * @Date: 2021-01-18 10:07:30
 * @LastEditors: zjq
 * @LastEditTime: 2021-01-18 10:55:36
 * @FilePath: /react-web/build/webpack.dev.js
 */
const webpack = require('webpack');
const {merge} = require('webpack-merge');
// const path = require('path');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  // 开发环境本地启动的服务配置
  devServer: {
    port: 2015,
    hot: true,
    open: true,
    openPage: 'http://127.0.0.1:2015/dashboard',
    historyApiFallback: true,
    compress: true,
    // 接口代理转发
    proxy: {
      '/testapi': {
        target: 'http://192.168.12.43:9322',
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/testapi': '' },
      },
    },
  },
  plugins: [ new webpack.HotModuleReplacementPlugin()],
  devtool: 'eval-source-map',
  optimization: {
    moduleIds: 'named',
  },
});
