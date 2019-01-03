
/**
  Private function
*/
const isArgumentFunction = (f) => {
  if (!f || typeof f !== 'function' || f.constructor !== Function) {
    return false;
  }
  return true;
};


/**
   * Pipeline
   * @param {function} sequencer - sequencer function.
   * @param {params} params -sequencer parameters.
*/
const pipeSeq = function pipeSeq(sequencer, ...params) {
  const initialValue = sequencer(...params);
  const fns = [];
  return {
    pipeline(f, ...args) {
      if (!isArgumentFunction(f)) {
        throw new Error('No function passed as param');
      }
      fns.push(f(...args));
      return this;
    },
    invoke() {
      return () => () => fns.reduce((res, fn) => fn(res), initialValue());
    },
  };
};

export default {
  pipeSeq
};
