module.exports = {
    entry: {
        application: './src/javascripts/application.js',
    },
    output: {
        path: '../app/assets/javascripts',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}