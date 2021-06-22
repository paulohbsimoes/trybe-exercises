function myDeepCompare(itemA, itemB) {
  if (typeof itemA !== typeof itemB) return false;
  if (typeof itemA !== 'object') return itemA === itemB;
  for (let key of Object.keys(itemA)) {
    if (!myDeepCompare(itemA[key], itemB[key])) return false;
  }
  return true;
}

module.exports = myDeepCompare;
