const mongoose = require('mongoose');
// connection to mongo
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bookDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});

module.exports = mongoose.connection;
