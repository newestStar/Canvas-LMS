import fetch from './internal/fetch'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrives all discussion topics in course
 * @param {Number} courseId the course id.
 * @param {Number} topicId the discussion topic id.
 * @return {Promise} A promise that resolves to a discussion topic Object
 */

const getDiscussionTopics = async (courseId, topicId) => {
  return fetch(canvasDomain + `/courses/${courseId}/discussion_topics/${topicId}`)
}

export default getDiscussionTopics
