export const myIterable = {
  val: {
    foo: 55,
    bar: 66
  },

  // for(let v of iterable) すると valのkeyとvalueセットを順番に返す
  // { key: 'foo', value: 55 }
  // { key: 'bar', value: 66 }
  [Symbol.iterator]: function*() {
    for(let k in this.val) {
      yield { key: k, value: this.val[k] }
    }
  }
}