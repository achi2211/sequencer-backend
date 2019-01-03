/**
  return true if a number is even, false if not
*/
export default function isEven () {
  return num => ({
    status: ((num % 2) === 0), //true if rest of division is 0, false otherwise
    number: num
  });
};
