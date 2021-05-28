const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");

//load env vars
dotenv.config({ path: "./config/config.env" });

//connect to database
connectDB();

// Routes Files
const contact = require("./routes/contact");

const app = express();

//Boy Parser
app.use(express.json());

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Sanitize data
app.use(mongoSanitize());

//set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

//prevent http param pollution
app.use(hpp());

//enable CORS
app.use(cors());

//Mount Routers

app.use("/api/v1/contact", contact);

app.use(errorHandler);

const PORT = process.env.PORT || 8000;
const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // close Server & exit Process

  server.close(() => process.exit(1));
});
