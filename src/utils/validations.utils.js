const hasSpecificLength = ({ target, length }) => {
  if (target === undefined) throw new Error('Target is required')
  if (typeof target !== 'string') throw new Error('Target must be a string')
  if (length === undefined) throw new Error('Length is required')
  if (typeof length !== 'number') throw new Error('Lenght must be a number')

  return target.length === length
}

module.exports = {
  hasSpecificLength,
}
