import sequencers from '../../src/sequencers';
import generator from '../../src/generator';
import pipelineFunctions from '../../src/pipelineFunctions';
import { expect } from 'chai';


describe('test generators', () => {
  it('test factorial sequencer', (done) => {
    const seq = generator(sequencers.factorialSeq);
    expect(seq.next()).to.eql(1);
    expect(seq.next()).to.eql(1);
    expect(seq.next()).to.eql(2);
    expect(seq.next()).to.eql(6);
    expect(seq.next()).to.eql(24);
    expect(seq.next()).to.eql(120);
    return done();
  });
  it('test fibonacci sequencer', (done) => {
    const seq = generator(sequencers.fibonacciSeq);
    expect(seq.next()).to.eql(1);
    expect(seq.next()).to.eql(1);
    expect(seq.next()).to.eql(2);
    expect(seq.next()).to.eql(3);
    expect(seq.next()).to.eql(5);
    return done();
  });
  it('test range sequencer ', (done) => {
    const seq = generator(sequencers.rangeSeq, 1, 2);
    expect(seq.next()).to.eql(1);
    expect(seq.next()).to.eql(3);
    expect(seq.next()).to.eql(5);
    expect(seq.next()).to.eql(7);
    expect(seq.next()).to.eql(9);
    return done();
  });
  it('test partial sum sequencer', (done) => {
    const seq = generator(sequencers.partialSumSeq, 1, 3, 7, 2, 0, 1);
    expect(seq.next()).to.eql(1);
    expect(seq.next()).to.eql(4);
    expect(seq.next()).to.eql(11);
    expect(seq.next()).to.eql(13);
    expect(seq.next()).to.eql(13);
    expect(seq.next()).to.eql(14);
    expect(() => seq.next()).to.throw(Error);
    return done();
  });
  it('test prime sequencer', (done) => {
    const seq = generator(sequencers.primeSeq);
    expect(seq.next()).to.eql(2);
    expect(seq.next()).to.eql(3);
    expect(seq.next()).to.eql(5);
    expect(seq.next()).to.eql(7);
    expect(seq.next()).to.eql(11);
    expect(seq.next()).to.eql(13);
    expect(seq.next()).to.eql(17);
    return done();
  });
});


describe('functions for composition', () => {
  it('test isEven function', (done) => {
    const isEven = pipelineFunctions.isEven();
    const evenNumber = isEven(8);
    const oddNumber = isEven(7);
    expect(evenNumber.status).to.eql(true);
    expect(evenNumber.number).to.eql(8);
    expect(oddNumber.status).to.eql(false);
    expect(oddNumber.number).to.eql(7);
    return done();
  });
  it('test accumulator function', (done) => {
    const accumulator = pipelineFunctions.accumulator();
    const initialvalue = accumulator(5);
    const nextValue = accumulator(2);
    expect(initialvalue).to.eql(5);
    expect(nextValue).to.eql(7);
    return done();
  });
});

