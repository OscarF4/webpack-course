const path = require('path'); //Disponible en node

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //Root
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'] //Extensiones del proyecto
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}