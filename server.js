import express    from 'express';
import path       from 'path';
import bodyParser from 'body-parser';
import mongoose   from 'mongoose';
import proxy      from 'proxy-middleware';
import url        from 'url';
import Roach      from 'roachjs';

const app        = express();
const NODE_ENV   = app.get('env');
const PRODUCTION = NODE_ENV === 'production';

// Setup webpack server
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.js';

var webpackServer = new WebpackDevServer(webpack(webpackConfig), {
    hot: true,
    historyApiFallback: true,
    publicPath: '/assets/',

    stats: { colors: true }
})

webpackServer.listen(3000, 'localhost', () => {});

// Connect to database
mongoose.connect('mongodb://localhost:27017');
mongoose.connection.once('connected', () => {
    console.log("Connected to Database");
});

// Express plugins
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup routes
//require('./api')(app);
app.get('/api', (req, res) => {
    var roachClient = new Roach({
        uri: 'http://localhost:5432',
        http: require('http')
    });

    roachClient.put('my_key', '5', (err, res2) => {
        roachClient.get('my_key', (err, value, res3) => {
            res.json(parseInt(value,10));
        });
    });
});
app.use('/assets', proxy(url.parse('http://localhost:3000/assets')));
app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start server
app.listen(8080, () => {
    console.log("Listening on port 8080");
});
