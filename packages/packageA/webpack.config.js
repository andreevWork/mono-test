const { getWebpackConfig } = require('../../configs/webpack/base');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

const config = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'PackageA',
            type: "commonjs"
        }
    },
    externals: {
        lodash: 'lodash',
    },
    plugins: [
        // new ModuleFederationPlugin({
        //   // adds lodash as shared module
        //   // version is inferred from package.json
        //   // there is no version check for the required version
        //   // so it will always use the higher version found
        //   shared: {
        //     lodash: {
        //         singleton: true,
        //         eager: false,
        //     }
        // }
        // }),
      ],
};

module.exports = getWebpackConfig(config);