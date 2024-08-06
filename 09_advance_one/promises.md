# Promises in JavaScript
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Since most people are consumers of already-created promises

A Promise is in one of these states: 

• pending: initial state, neither fulfilled nor rejected.

• fulfilled: meaning that the operation was completed successfully.

• rejected: meaning that the operation failed.

The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's then method are called.

A promise is said to be settled if it is either fulfilled or rejected, but not pending.

![Understanding Image](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png)

## Chained Promises
The promise methods then(), catch(), and finally() are used to associate further action with a promise that becomes settled.

The then() method takes up to two arguments; the first argument is a callback function for the fulfilled case of the promise, and the second argument is a callback function for the rejected case.

ex -
```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC);

```

The settled state of the initial promise determines which handler to execute.

• If the initial promise is fulfilled, the fulfillment handler is called with the fulfillment value.

• If the initial promise is rejected, the rejection handler is called with the rejection reason.

## Chaining
A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step.

ex-
```javascript 
doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);

```