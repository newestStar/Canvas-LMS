import postRequest from './internal/post'

const canvasDomain = process.env.CANVAS_API_DOMAIN

/**
 * Creates course
 * @param {Number} courseId the course ID of the target course.
 * @param {String} columnTitle the title of the custom column.
 * @param {Number} columnPosition the position of the column, starting from left to right, indexed at 1.
 * @return {Promise} A CustomColumn object: https://canvas.instructure.com/doc/api/custom_gradebook_columns.html#CustomColumn
 */

export default function createCustomGradebookColumn (courseId, columnTitle, columnPosition) {
  return postRequest(canvasDomain + `/courses/${courseId}/custom_gradebook_columns`, {
    'column[title]': columnTitle,
    'column[position]': columnPosition
  })
}
