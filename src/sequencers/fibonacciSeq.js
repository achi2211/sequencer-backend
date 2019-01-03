/**
 * Fibonacci implementation, ex. 1, 1, 2, 3, 5, 8, 13
*/
export default function fibonacciSeq () {
  let lastValue = 0;
  let nowValue = 1;
  let nextValue = 1;

  return () => {
    lastValue = nowValue;
    nowValue = nextValue;
    nextValue = lastValue + nowValue;
    return lastValue;
  };
};
