const express = require("express");
const router = express.Router();
const scraperController = require("../controllers/scraperController");
const endpoints = require("../utils/apiEndpoints");

router.post(endpoints.SCRAPE, scraperController.scrapeStories);

module.exports = router;
