const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
            test: /\.ts$/,
            use: 'ts-loader',
            include: [path.resolve(__dirname, 'src')]
        }
        ]
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}