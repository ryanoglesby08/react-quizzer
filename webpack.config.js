module.exports = {
    entry: './src/app.jsx',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.json$/, loader: 'json'}
        ]
    }
};