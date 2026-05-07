const Story = require("../models/Story");
const User = require("../models/User");
const ErrorHandler = require("../utils/errorHandler");
const HTTP_STATUS_CODES = require("../utils/httpStatusCodes");
const { SUCCESS_MESSAGES } = require("../utils/clientResponseConstants");

class StoryService {
  /**
   * Get all stories sorted by points descending (with pagination)
   */
  async getAllStories(query) {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const skip = (page - 1) * limit;

    const stories = await Story.find()
      .sort({ points: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Story.countDocuments();

    return {
      stories,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    };
  }

  /**
   * Get single story by ID
   */
  async getStoryById(id) {
    const story = await Story.findById(id);
    if (!story) {
      throw new ErrorHandler("Story not found", HTTP_STATUS_CODES.NOT_FOUND);
    }
    return story;
  }

  /**
   * Toggle Bookmark for a user
   */
  async toggleBookmark(userId, storyId) {
    const user = await User.findById(userId);
    const story = await Story.findById(storyId);

    if (!story) {
      throw new ErrorHandler("Story not found", HTTP_STATUS_CODES.NOT_FOUND);
    }

    const index = user.bookmarks.indexOf(storyId);

    if (index === -1) {
      user.bookmarks.push(storyId);
    } else {
      user.bookmarks.splice(index, 1);
    }

    await user.save();

    return {
      message: index === -1 ? "Story bookmarked successfully" : "Bookmark removed successfully",
      isBookmarked: index === -1,
    };
  }

  /**
   * Get user bookmarked stories
   */
  async getUserBookmarks(userId) {
    const user = await User.findById(userId).populate("bookmarks");
    if (!user) {
      throw new ErrorHandler("User not found", HTTP_STATUS_CODES.NOT_FOUND);
    }

    return user.bookmarks;
  }
}

module.exports = new StoryService();
