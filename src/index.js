import express from 'express'
import chalk   from 'chalk'
import path    from 'path'
import sequencers from './sequencers';
import pipelineFunctions from './pipelineFunctions';
import generator from './generator';
import httpStatus from 'http-status';

import config  from './config'

const app = express()

app.use('/', express.static(path.resolve(__dirname, '/../public')))

app.get('/', (req, res) => {
  res.send({
    message: 'server running...'
  })
})

// inicilize sequencers
const factorialSeq = generator(sequencers.factorialSeq);
const fibonacciSeq = generator(sequencers.fibonacciSeq);
const primeSeq = generator(sequencers.primeSeq);
let rangeSeq = false;
let partialSumSeq = false;

let resultObject = {};

app.get('/sequencer', (req, res) => {
  // default header
  res.contentType('application/json');
  res.setHeader('Access-Control-Allow-Origin', '*'); //enabled cors

  switch (req.query.function) {
    case 'factorial':
      resultObject.function = 'factorial';
      resultObject.value = factorialSeq.next();

      res.status(httpStatus.OK);
      res.json(resultObject);
      break;
    case 'fibonacci':
      resultObject.function = 'fibonacci';
      resultObject.value = fibonacciSeq.next();

      res.status(httpStatus.OK);
      res.json(resultObject);
      break;
    case 'prime':
      resultObject.function = 'prime';
      resultObject.value = primeSeq.next();

      res.status(httpStatus.OK);
      res.json(resultObject);
      break;
    case 'range':
      resultObject.function = 'range';
      let rangeArguments = JSON.parse('[' + req.query.arguments + ']'); // convert into array

      if (!rangeSeq) {
        rangeSeq = generator(sequencers.rangeSeq, ...rangeArguments); // spread functionArguments
        resultObject.value = rangeSeq.next();
      } else {
        resultObject.value = rangeSeq.next();
      }

      res.status(httpStatus.OK);
      res.json(resultObject);
      break;
    case 'partialSum':
      resultObject.function = 'range';
      let partialSumArguments = JSON.parse('[' + req.query.arguments + ']'); // convert into array

      if (!partialSumSeq) {
        partialSumSeq = generator(sequencers.partialSumSeq, ...partialSumArguments); // spread partialSumArguments
        resultObject.value = partialSumSeq.next();
      } else {
        resultObject.value = partialSumSeq.next();
      }

      res.status(httpStatus.OK);
      res.json(resultObject);
      break;
    default:
      let resultErrorObject = {};
      resultErrorObject.error = 'Function not found';

      res.status(httpStatus.NOT_IMPLEMENTED).json(resultErrorObject);
      break;
  }
})

app.get('/is-even', (req, res) => {
  // default header
  res.contentType('application/json');
  res.setHeader('Access-Control-Allow-Origin', '*'); //enabled cors

  if (req.query.number && req.query.number > 0) {
    const isEven = pipelineFunctions.isEven();
    resultObject.function = 'isEven';
    resultObject.value = isEven(req.query.number).status ? 'Yes' : 'No';

    res.status(httpStatus.OK);
    res.json(resultObject);

  } else {
    let resultErrorObject = {};
    resultErrorObject.error = 'Number parameter not found or invalid';

    res.status(httpStatus.BAD_REQUEST).json(resultErrorObject);
  }
})

app.listen(config.PORT, () => {
  const log = console.log
  log('\n')
  log(chalk.bgGreen.black(`Server listening on http://localhost:${config.PORT}/ ..`))
  log('\n')

  log(`${chalk.blue('Adrian`s Jumpcut fullstack test')}`)
  log('\n')
})

export default app
