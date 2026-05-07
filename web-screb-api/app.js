const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middlewares/error");

const auth = require("./routes/auth");
const { SERVICE_URL, PORT, NODE_ENV, APP_NAME } = require("./utils/envConstants");
const { serverStatusTemplate } = require("./utils/serverStatusTemplate");

const corsOptions = {
  origin: true,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
};

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "10000mb" }));
app.use(bodyParser.urlencoded({ limit: "10000mb", extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send(serverStatusTemplate(PORT, NODE_ENV, APP_NAME));
});

// Auth Routes
app.use(SERVICE_URL, auth);

// Error Middleware
app.use(errorMiddleware);

module.exports = app;
