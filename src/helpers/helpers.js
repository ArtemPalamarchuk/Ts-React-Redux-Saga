export const sum = (a, b) => a + b

export const trimString = (str, maxLength) =>
  str && str.trim().length > maxLength
    ? `${str.trim().slice(0, maxLength)}`
    : str

export const getIsValidNumber = number => !Number.isNaN(parseInt(number, 10))

export const deleteObjProp = (obj, prop) => {
  const res = {...obj}
  delete res[prop]
  return res
}