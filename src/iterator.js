import { wait } from './async'

// 1ループごとにdelay秒待つ 
export function makeAsyncIterator(start=0, end=Infinity, step=1, delay=1000) {
  let nextIndex = start;
  let iterationCount = 0;
  const asyncIterator = {
    async next() {
      let result;
      if(nextIndex < end) {
        result = { value: nextIndex, done: false }
        if(nextIndex > start){
          await wait(delay);
        }
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true }
    }
  }
  return asyncIterator;
}

// ジェネレータ関数
// 実行すると、イテレータを返す
// イテレータは一回のnext()呼び出しにつき yieldまで実行する
// yieldは {value:i, done: false} を返す
export async function* generateAsyncIterator(start=0, end=Infinity, step=1, delay=1000) {
  let n = 0;
  for(let i=start; i<end; i+=step) {
    if(i>start) {
      await wait(delay);
    }
    n+=1;
    yield i;
  }
  return n;
}