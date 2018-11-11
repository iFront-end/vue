import config               from "./config";
import webpack              from "webpack";
import webpackConfig        from "../../webpack.config.dev";
import webpackMiddleware    from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

export default (app) => {
  if (!config.IS_PRODUCTION) {
    const compiler = webpack(webpackConfig);

    app.use(webpackMiddleware(compiler, {
      hot: true,
      publicPath: webpackConfig.output.publicPath,
      noInfo: true
    }));

    app.use(webpackHotMiddleware(compiler));
  }
}
