const targetSumExistsInTwoNumbers = (list, target) => {
  if (list.length < 2 || isNaN(target)) {
    return false;
  }

  for (let value1 of list) {
    for (let value2 of list) {
      if (value1 + value2 === target) return true;
    }
  }

  return false
}


const targetSumExistsInThreeNumbers = (list, target) => {
  if (list.length < 3 || isNaN(target)) {
    return false;
  }

  for (let value1 of list) {
    for (let value2 of list) {
      for (let value3 of list) {
        if (value1 + value2 + value3 === target) return true;
      }
    }
  }
  
  return false
}

module.exports = {
  targetSumExistsInTwoNumbers,
  targetSumExistsInThreeNumbers
}
