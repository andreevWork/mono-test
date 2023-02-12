const { getWebpackConfig } = require('../../configs/webpack/base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

const path = require('path');

const config = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin(),
        // new ModuleFederationPlugin({
        //     // adds lodash as shared module
        //     // version is inferred from package.json
        //     // there is no version check for the required version
        //     // so it will always use the higher version found
        //     shared: {
        //         lodash: {
        //             singleton: true,
        //             eager: true,
        //         }
        //     }
        //   }),
    ],
};

module.exports = getWebpackConfig(config);