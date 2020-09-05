const squareRoot = (radicand) => {
  if (radicand < 0 || isNaN(radicand)) {
    return NaN;
  }

  let guess = radicand / 2;
  let prevResult = radicand / guess;

  while(guess != prevResult) {
    prevResult = guess;
    guess = Number((applyBabylonian(guess, radicand)).toFixed(15)); 
  }

  return guess;
}

  
const applyBabylonian = (guess, radicand) => {
  return (guess + (radicand / guess)) / 2;
}

module.exports = squareRoot
