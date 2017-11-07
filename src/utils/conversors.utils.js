const { hasSpecificLength } = require('./validations.utils')
const moment = require('moment-timezone')

const europeanTime2UTC = (timezone = '') => {
  if (hasSpecificLength({ target: timezone, length: 0 })) {
    throw new Error('CET or CEST is required')
  }
  switch (timezone) {
    case 'CET':
      return '+0200'
      break
    case 'CEST':
      return '+0300'
      break
    default:
      throw new Error('Invalid Option')
      break
  }
}

const replaceTimeZone = (fullTibiaTime = '') => {
  if (hasSpecificLength({ target: fullTibiaTime, length: 0 })) {
    throw new Error('A complete tibia time is required')
  }

  const regexTimeZone = /\sces?t/gi

  const tibiaTimeWithoutTimeZone = fullTibiaTime.replace(regexTimeZone, '')
  const timeZone = fullTibiaTime.match(regexTimeZone)
    ? fullTibiaTime.match(regexTimeZone)[0].replace(/\s/g, '')
    : ''

  const treatedTimeZone = europeanTime2UTC(timeZone)

  return `${tibiaTimeWithoutTimeZone} ${treatedTimeZone}`
}

const tibiaTime2Moment = (tibiaTime = '') => {
  if (hasSpecificLength({ target: tibiaTime, length: 0 })) {
    throw new Error('time is required')
  }

  const newDate = new moment(replaceTimeZone(tibiaTime), 'MMM DD YYYY HH:mm:ss ZZ')

  if (!newDate.isValid()) {
    throw new Error('Invalid time.')
  }

  return newDate.tz('Europe/Berlin')
}

module.exports = {
  tibiaTime2Moment,
  replaceTimeZone,
}
