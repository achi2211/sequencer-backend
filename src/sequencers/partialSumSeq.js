/**
 * Partial Sum implementation, ex. 1, 4, 11, 13, 13, end
*/
export default function partialSumSeq (...args) {  // using spread operator to get the list iterable :)
  let sum = 0;
  let i = 0;
  return () => {
    if (args.length === i) {
      throw new Error('End of sequence error!');
    }
    sum += args[i];
    i++;
    return sum;
  };
};
