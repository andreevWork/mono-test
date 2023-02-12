const path = require('path');

function getWebpackConfig({
    entry, output, plugins = [], externals = {}
}) {
    const isProd = process.env.NODE_ENV === 'production';

    return {
        entry,
        output: {
            filename: 'main.js',
            clean: true,
            ...output,
        },
        mode: isProd ? 'production' : 'development',
        plugins: [
            ...plugins,
        ],
        externals,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            configFile: path.resolve(__dirname, '../babel.config.json')
                        }
                    }
                }
            ]
        }
    };
}

module.exports = { getWebpackConfig };