const express = require("express");
const router = express.Router();
const storyController = require("../controllers/storyController");
const { isAuthenticatedUser } = require("../middlewares/auth");
const endpoints = require("../utils/apiEndpoints");

// Public routes
router.get(endpoints.GET_STORIES, storyController.getStories);

// Protected routes
router.get(endpoints.GET_BOOKMARKS, isAuthenticatedUser, storyController.getUserBookmarks);
router.get(endpoints.GET_STORY_BY_ID, storyController.getStoryById);
router.post(endpoints.TOGGLE_BOOKMARK, isAuthenticatedUser, storyController.toggleBookmark);

module.exports = router;
