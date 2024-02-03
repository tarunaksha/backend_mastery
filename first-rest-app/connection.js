const mongoose = require("mongoose");

async function connectMongoDb(url) {
  return mongoose.connect(url)
    .then(() => console.log("MongoDB connection successful"))
    .catch(err => console.log("Error : ", err));
}

module.exports = connectMongoDb;
