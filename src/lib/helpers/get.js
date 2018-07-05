const get = (object, path, defaultVal) => {
  const _path = Array.isArray(path)
    ? path
    : path.split(".").filter(i => i.length);

  if (!_path.length) {
    return object === undefined ? defaultVal : object;
  }

  return get(object[_path.shift()], _path, defaultVal);
};

export default get;
