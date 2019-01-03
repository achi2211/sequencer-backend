/**
  * Range implementation ex. rangeSeq(1, 2) -> 1, 3, 5, 7,
  * @param {start} start - start number
  * @param {step} step - step used on the sequence.
*/

export default function rangeSeq (start, step) {
  return () => {
    var currentValue = start;
    start += step;
    return currentValue;
  };
};
