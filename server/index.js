import express           from 'express';
import bodyParser        from 'body-parser';
import path              from 'path';
import Debug             from 'debug';
import config            from './config/config';
import devOptionsWebpack from './config/devOptionsWebpack';

const app = express();
const debug = Debug('server:app');

app.use(bodyParser.json());
app.use('/dist', express.static('dist'));

devOptionsWebpack(app);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
});

app.listen(config.PORT, () => debug(`Server listen on port ${config.PORT}, ENV = ${config.NODE_ENV}`));

