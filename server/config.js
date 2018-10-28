import dotEnv from 'dotenv';
import path from 'path';

const root = path.join.bind(this, __dirname);

dotEnv.config({
  path: root('../.env')
});

export default {
  PORT: process.env.PORT || 5000,
  MONGO_URL: process.env.MONGO_URL,
  SESSION_SECRET: process.env.SESSION_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  PER_PAGE: process.env.PER_PAGE,
  DESTINATION: 'site/assets/uploads'
};
