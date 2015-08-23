import express    from 'express';
import path       from 'path';
import bodyParser from 'body-parser';
import proxy      from 'proxy-middleware';
import url        from 'url';

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

// Express plugins
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup routes
require('./api')(app);
app.use('/assets', proxy(url.parse('http://localhost:3000/assets')));
app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start server
app.listen(8080, () => {
    console.log("Listening on port 8080");
});
