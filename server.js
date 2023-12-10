const express = require('express')
const webpack = require('webpack')
const WebDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config')
const compiler = webpack(config)

app.use(
    WebDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    })
)

app.listen(3000, () => {
    console.log('Enibla listening on port 3000!\n');
})