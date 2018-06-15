import fetchAll from './internal/fetchAll'
import buildOptions from './internal/util'

require('dotenv').config()

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Retrieves all assignments in a course
 * @param {Number} deptId the dept id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a Course object: https://canvas.instructure.com/doc/api/courses.html#Course
*/

export default function getCourses (deptId, ...options) {
  return fetchAll(canvasDomain + `/accounts/${deptId}/courses?` + buildOptions(options))
}
