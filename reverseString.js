const reverseString = (str) => {
  let reverseStr = str.split('').reverse().join('');
  return reverseStr;
};

module.exports = reverseString;
