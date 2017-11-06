const hasSpecificLength = ({ target, length }) => {
  if (target === undefined) throw new Error('Target is required')
  if (length === undefined) throw new Error('Length is required')
  return target.length === length
}

module.exports = {
  hasSpecificLength,
}
