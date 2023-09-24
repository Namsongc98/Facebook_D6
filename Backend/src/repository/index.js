module.exports = {
  ...require('./users.repository'),
  ...require('./friendship.repository'),
  ...require('./friend_requests.repository'),
  ...require('./history_search.repository'),
  ...require('./posts.repository'),
  ...require('./pages.repository'),
  ...require('./page_followers.repository'),
  ...require('./stories.repository'),
  ...require('./message.repository'),
  ...require('./user_conversation.repository'),
  ...require('./hobbies.repository'),
  ...require('./media_post.repository'),
  ...require('./reaction.repository'),
  ...require('./notification.repository'),
  ...require('./comment.repository'),
  ...require('./award.repository'),
  ...require('./online_user.repository'),
  ...require('./re_comment.repository'),
  ...require('./storage.repository'),
  ...require('./tags.repository'),
  ...require('./groupPages.repository'),
  ...require('./groupmembers.repository'),
}
