const mongoose = require("mongoose");

mongoDbUri =
  "mongodb+srv://" +
  process.env.MONGODB_USER +
  ":" +
  process.env.MONGODB_PASSWORD +
  "@" +
  process.env.MONGODB_HOST +
  "/" +
  process.env.MONGODB_DATABASE;

const mongoDbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose.connection.once("connected", () => {
  console.log("Connected to database");
});

mongoose.connect(mongoDbUri, mongoDbOptions);

module.exports = mongoose.connection;
