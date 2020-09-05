const stackMachineCalculator = (instructions) => {
  const instructionsArray = instructions.split(' ');

  return instructionsArray.reduce(stackMachine, []).pop()
}

function stackMachine(ac, next) {
  if (isNaN(next)) {
    ac = calc(ac, next)
  } else {
    ac.push(+next)
  }

  return ac;
}

function calc(values, operator) {
  var calcValues;
  switch(operator) {
    case '+':
      calcValues = values.splice(values.length -2, values.length);
      values.push(calcValues[0] + calcValues[1])
      return values;
    case '-':
      calcValues = values.splice(values.length -2, values.length);
      calcValues.sort((a, b) => {return a > b ? -1 : 1 });
      values.push(calcValues[0] - calcValues[1])
      return values;
    case 'POP':
      values.pop();
      return values;
    case 'DUP':
      values.push(values[values.length - 1]);
      return values;
    default: return values
  }

}

module.exports = stackMachineCalculator
