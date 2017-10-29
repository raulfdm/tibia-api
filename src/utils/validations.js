const hasRequiredParameters = (listOfParams = [], requestBody = {}) => {
  if (listOfParams.length === 0) {
    throw new Error('At least one param is required')
  }

  let response = {
    success: true,
    missingArgs: [],
  }

  const arrayOfObjectKeys = Object.keys(requestBody)
  const missingArgs = listOfParams.filter(param => !arrayOfObjectKeys.includes(param))

  if (missingArgs.length !== 0) {
    response = {
      success: false,
      missingArgs,
    }
  }
  return response
}

const hasEspecialCharacters = (text = '') => /["'[\]!@#$%"&*()_\-+§={}^~,.><;:\d]/.test(text)

module.exports = {
  hasEspecialCharacters,
  hasRequiredParameters,
}
