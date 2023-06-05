const mongoose = require("mongoose");

const URI =
  "mongodb+srv://roaabarq:1111@cluster0.cb8sdck.mongodb.net/?retryWrites=true&w=majority";
// "mongodb://localhost:27017/temp"

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    // useNewUrlParser: true,
    useCreateIndex: true,
  });

  console.log("db connected ");
};

module.exports = connectDB;
