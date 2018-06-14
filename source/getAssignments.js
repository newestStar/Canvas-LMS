import fetchAll from './internal/fetchAll'
import buildOptions from './internal/util'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrieves all assignments in a course
 * @param {Number} courseId the coourse id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Assignment objects: https://canvas.instructure.com/doc/api/assignments.html#Assignment
 */

export default function getAssignments (courseId, ...options) {
  return fetchAll(canvasDomain + `/courses/${courseId}/assignments?` + buildOptions(options))
}
