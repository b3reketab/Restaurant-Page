const express = require('express');
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);

app.use(
    WebpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    })
);

app.listen(3000, () => {
    console.log('app is listening on port 3000 !');
})
