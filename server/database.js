const mongoose = require("mongoose");
const URI = "mongodb://localhost:27017/mean-crud-employees";

mongoose
  .connect(URI)
  .then(db => console.log("Database is connected!"))
  .catch(err => console.error(err));

module.exports = mongoose;
