function stringLength(str) {
  const strLength = str.length;
  if (strLength === 0) return 'the string is empty';
  else if (strLength > 10) return 'the string length is Over than 10';
  else return strLength;
}
module.exports = stringLength;
