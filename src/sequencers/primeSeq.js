/**
 * Private function, used to find the next primer number given the last value
*/
const findNextPrimeNumber = function findNextPrimeNumber (value) {
  if (value > 2) {
    let i;
    let q;
    // loop until find the next prime number
    do {
      i = 3;
      value += 2;
      q = Math.floor(Math.sqrt(value));
      while (i <= q && value % i) {
        i += 2;
      }
    } while (i <= q);
    return value;
  } else {
    let result = (value ===  2) ? 3 : 2;
    return result;
  }
};

/**
  Prime implementation, ex. 2, 3, 5, 7, 11, 13
*/
export default function primeSeq () {
  let currentValue = 0;
  return () => {
    currentValue = findNextPrimeNumber(currentValue);
    return currentValue;
  };
};
