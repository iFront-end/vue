// require('./connect')();
// import connect from 'connect';
// connect();

import express from 'express';
import bodyParser from 'body-parser';
import history from 'connect-history-api-fallback';
import path from 'path';
import config from './config';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

const app = express();

app.use(history());
app.use(bodyParser.json());
app.use('/dist', express.static('dist'));

if (!config.IS_PRODUCTION) {
  const compiler = webpack(webpackConfig);

  app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  }));

  app.use(webpackHotMiddleware(compiler));
}

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
});

app.listen(config.PORT, () => console.log(`Server listen on port ${config.PORT}, ENV = ${config.NODE_ENV}`));

