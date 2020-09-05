const mostRecurrent = (set) => {

  const stringNum = set.join('');
  let highestNumber = 0;
  let highestRecurrent = 0;

  for(let value of set) {
    var regex = new RegExp(value, 'g');
    let stringMatch = stringNum.match(regex).length;
    if (stringMatch > highestRecurrent) {
      highestNumber = value;
      highestRecurrent = stringMatch;
    }
  }

  return highestNumber;
}

module.exports = mostRecurrent
