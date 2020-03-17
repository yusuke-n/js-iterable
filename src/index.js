import { makeAsyncIterator, generateAsyncIterator } from './iterator'
import { myIterable } from './iterable-obj'
import { wait } from './async'

async function loopWithAwait() {
  let itr = generateAsyncIterator(0, 10, 1, 1000);
  let result = await itr.next(); // Promiseが返ってくるのでawaitしないと期待した結果にならない
  while(!result.done) {
    console.log(result.value);
    result = await itr.next();
  }
  console.log("iterated over sequense of size: ", result.value);
}

for(let v of myIterable) {
  console.log(v)
}

loopWithAwait();

