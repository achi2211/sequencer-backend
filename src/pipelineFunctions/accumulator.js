/**
   * Main Accumulator
*/
export default function accumulator () { //no parameter necessary on the main function
  let sum = 0;
  return (value) => {
    sum += value;
    return sum;
  };
};
