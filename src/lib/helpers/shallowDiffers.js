// shallowDiffers is about 2x faster than ramda's `equals`.
function shallowDiffers(a, b) {
  for (let i in a) {
    if (!(i in b)) {
      return true;
    }
  }
  for (let i in b) {
    if (a[i] !== b[i]) {
      return true;
    }
  }
  return false;
}

export default shallowDiffers;
