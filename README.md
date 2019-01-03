# sequencer-backend

> Simple Express Backend which implements a sequencer with the nexts functions

- Factorial Sequence 
- Fibonacci Sequence
- Range Sequence
- Prime Sequence
- Partial Sum Sequence

## Endpoints

**URL** : `/sequencer?function=<function-name-here>`

**Method** : `GET`

**Permissions required** : None

**Main query string parameters constraints** : `function=[fibonacci|factorial|prime|range|partialSum]`

**Main query string parameters example** Required : `?function=<function-name-here>`

**Secondary query string parameters example** Used only with range and partialSum functions: `&arguments=1,2`

## Success Responses

**Code** : `200 OK`

**Content Example** : 
```json
{
    "function": "fibonacci|factorial|prime|range|partialSum",
    "value": 1
}
```
## Error Responses

**Condition** : If code property is not present on the query string parameter.

**Code** : `501 Not Implemented`

**Content** :

```json
{
    "message" :  "Error: Function not found"
}
```

**URL** : `/is-even?number=<number-here>`

**Method** : `GET`

**Permissions required** : None

**Query string parameters constraints** : `number=[integer < 0]`

**Query string parameters example** Required : `?number=1|2|3...`

## Success Responses

**Code** : `200 OK`

**Content Example** : 
```json
{
    "function": "isEven",
    "value": "true|false"
}
```
## Error Responses

**Condition** : If code property is not present on the query string parameter.

**Code** : `400 Bad Request`

**Content** :

```json
{
    "message" :  "Error: Number parameter not found or invalid"
}
```

## Includes

- Webpack 3
- Babel (ES6, babel-preset-env)
- Hot-Reload
- ESLint w/ Standard
- Express

## Usage

```bash
git clone git@github.com:achi2211/sequencer-backend.git

cd sequencer-backend

# make it to your own
rm -rf .git

npm install

# hot reload
npm run dev

# test
npm run unit

# coverage
npm run cover
```
