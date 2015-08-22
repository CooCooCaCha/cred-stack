var webpack = require('webpack');

module.exports = {
    entry: [
        './index.js',
        'webpack/hot/only-dev-server',
        'webpack-dev-server/client?http://localhost:3000'
    ],
    output: {
        path: __dirname + '/build',
        publicPath: 'http://localhost:3000/assets/',
        filename: 'bundle.js',
        sourceMapFilename: 'debug/[file].map',
    },
    module: {
        loaders: [
            { 
                test: /\.js?$/,  
                loaders: [
                    'react-hot', 
                    'babel?stage=0&optional[]=runtime'
                ], 
                exclude: /node_modules/ 
            },
            {
                test: /\.css?$/,
                loader: 'style!css'
            }
        ]
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('production')}
        })
    ],

    resolve: {
        alias: {
            'react': __dirname + '/node_modules/react',
            'react/addons': __dirname + '/node_modules/react/addons'
        }
    }
};
