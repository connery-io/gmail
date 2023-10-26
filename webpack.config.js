const path = require('path');

module.exports = {
    mode: 'production',
    entry: './index.ts',
    target: 'node',
    optimization: {
        minimize: true,
    },
    output: {
        filename: 'plugin.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.webpack.json',
                        transpileOnly: true,
                    }
                },
                exclude: /node_modules/,
            },
        ],
    },
};
