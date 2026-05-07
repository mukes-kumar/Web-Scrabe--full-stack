const axios = require("axios");
const cheerio = require("cheerio");
const Story = require("../models/Story");
const { consoleHighlighted } = require("../utils/chalk");
const LOGGER_MESSAGES = require("../utils/logConstants");
const { SUCCESS_MESSAGES } = require("../utils/clientResponseConstants");

class ScraperService {
  /**
   * Scrape Top 10 Stories from Hacker News
   */
  async scrapeHackerNews() {
    try {
      consoleHighlighted.initiate(LOGGER_MESSAGES.SCRAPE_INITIATED);

      const { data } = await axios.get("https://news.ycombinator.com", {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
      });

      const $ = cheerio.load(data);
      const stories = [];

      $(".athing").slice(0, 10).each((index, element) => {
        const titleLine = $(element).find(".titleline > a");
        const title = titleLine.text();
        const url = titleLine.attr("href");
        
        const subtext = $(element).next();
        const pointsStr = subtext.find(".score").text() || "0 points";
        const points = parseInt(pointsStr.split(" ")[0]);
        const author = subtext.find(".hnuser").text() || "Anonymous";
        const postedAt = subtext.find(".age").text() || "unknown";

        stories.push({
          title,
          url,
          points,
          author,
          postedAt,
        });
      });

      // Clear existing stories and save new ones (upsert by URL)
      for (const story of stories) {
        await Story.findOneAndUpdate(
          { url: story.url },
          story,
          { upsert: true, new: true }
        );
      }

      consoleHighlighted.success(LOGGER_MESSAGES.SCRAPE_COMPLETED);

      return {
        message: SUCCESS_MESSAGES.SCRAPE_SUCCESSFUL,
        count: stories.length,
      };
    } catch (error) {
      consoleHighlighted.error(LOGGER_MESSAGES.SCRAPE_FAILED);
      throw error;
    }
  }
}

module.exports = new ScraperService();
