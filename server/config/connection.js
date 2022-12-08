const mongoose = require('mongoose');
// connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bookDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
