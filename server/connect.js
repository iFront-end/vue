// const config   = require('./config'),
//   app      = require('./app'),
//   mongoose = require('mongoose'),
//   mocks    = require('./mocks'); // TODO: Facker
//
// module.exports = () => {
//   mongoose.Promise = global.Promise;
//   mongoose.set('debug', config.IS_PRODUCTION);
//
//   mongoose.connect(config.MONGO_URL);
//
//   return mongoose.connection
//     .on('error', error => {
//       console.error(error.message);
//       process.exit(0);
//     })
//     .on('close', () => console.log(`Database connection close`))
//     .on('open', () => {
//       const info = mongoose.connections[0];
//
//       console.info(`Connected to ${info.host}:${info.port}/${info.name}`);
//       app.listen(config.PORT, () => {
//         console.log(`Listening on port ${config.PORT}`);
//       });
//       // mocks(); // TODO: Facker
//     });
// };
