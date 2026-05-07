const endpoints = {
  // Auth
  REGISTER: "/auth/register",
  LOGIN: "/auth/login",

  // Scraper
  SCRAPE: "/scrape",

  // Stories
  GET_STORIES: "/stories",
  GET_STORY_BY_ID: "/stories/:id",
  TOGGLE_BOOKMARK: "/stories/:id/bookmark",
  GET_BOOKMARKS: "/stories/bookmarks",
};


module.exports = endpoints;
