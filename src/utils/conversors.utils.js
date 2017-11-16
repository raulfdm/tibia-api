const { hasSpecificLength } = require('./validations.utils')
const momentTZ = require('moment-timezone')

const tibiaTime2Moment = (tibiaTime = '') => {

  if (hasSpecificLength({ target: tibiaTime, length: 0 })) {
    throw new Error('time is required')
  }
  
  const newTibiaTime = new momentTZ(tibiaTime, 'MMM DD YYYY, HH:mm:ss')

  if (!newTibiaTime.isValid()) {
    throw new Error('Invalid time.')
  }
  return newTibiaTime
}

module.exports = {
  tibiaTime2Moment,
}
