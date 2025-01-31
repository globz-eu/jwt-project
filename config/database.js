const mongoose = require("mongoose")

const { MONGO_URI } = process.env

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    })
    .then(() => {
      console.log("Successfully connected to database")
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...")
      console.error(error)
      process.exit(1)
    })
}
