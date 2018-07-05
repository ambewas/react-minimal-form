const set = (value, path, obj) => {
  path = path.split(".");
  let i;

  for (i = 0; i < path.length - 1; i++) {
    obj = obj[path[i]];
  }

  obj[path[i]] = value;
};

export default set;
