const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    context: path.resolve(__dirname),
    resolve: {
        extensions: ['.js'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    output: {
        chunkFilename: '[id].main.js',
        filename: 'app/main.js',
        library: 'app/main',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './widgets/Demo/dist/',
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-syntax-dynamic-import']
            }
        }]
    },
    externals: [
        (context, request, callback) => {
            if (/pe-wasm$/.test(request)) {
                return callback(null, 'amd ' + request);
            }

            if (/^@dojo/.test(request) || /^esri/.test(request)) {
                return callback(null, 'amd ' + request);
            }

            callback();
        },
    ],
}