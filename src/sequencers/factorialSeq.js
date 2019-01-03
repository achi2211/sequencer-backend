/**
 * Factorial implementation, ex. 1, 1, 2, 6, 24, ...
*/
export default function factorialSeq () {
  let sum = 0;
  let currentValue = 0;

  return () => {
    if (currentValue === 0) {
      sum = 1;
    } else {
      sum *= currentValue;
    }
    currentValue += 1;
    return sum;
  };
};
