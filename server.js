require("dotenv").config({ path: ".env" });
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebookslist", { useNewUrlParser: true });

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
