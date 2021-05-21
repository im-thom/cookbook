const isObject = (value) => {
  return value && typeof value === "object" && value.constructor === Object;
};

const isObjectWithValues = (value) => {
  return isObject(value) && Object.keys(value).length > 0;
};

export { isObject, isObjectWithValues };
