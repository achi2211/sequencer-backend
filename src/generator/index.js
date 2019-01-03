/**
   * Generator
   * @param {function} sequencer - sequencer function.
   * @param {args} args -sequencer parameters.
*/
export default function generator (sequencer, ...args) {
  const seq = sequencer(...args);
  return Object.assign(Object.create({
    next () {
      return seq.apply(null); //call sequencer function (use apply instead of call keeping eslint standard)
    }
  }));
};
