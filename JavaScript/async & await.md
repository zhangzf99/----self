<!--
 * @Author: zfzhang99
 * @Date: 2020-10-10 14:04:33
 * @LastEditTime: 2020-10-10 14:08:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \记录-----笔记\JavaScript\async & await.md
-->
### async作用
  async函数返回的是一个Promise对象；如果在函数中return一个直接量，async会把这个直接量通过Promise.resolve()封装成Promise对象；所以我们可以调用async修饰的函数后，可以使用then进行链式调用。
  ```js
  async function func1() {
    return 'aaa'
  }
  let result = func1()

  console.log(func1)    // Promise {<fulfilled>: "aaa"}

  result.then((data) => {
    console.log(data)    // 'aaa'
  })
  ```

  如果async函数没有返回值，它会返回Promise.resolve(undefined)
  ```js
  async function func1() {
    console.log('aaa')     // 'aaa'
  }
  let result = func1()

  console.log(result)    // Promise {<fulfilled>: undefined}

  result.then((data) => {
    console.log(data)    // undefined
  })
  ```

  **总结：**  Promise的特点：无等待。在没有await的情况下执行async函数，会立即执行，并且返回一个Promise对象，不会阻塞后面的语句。这时和普通的Promise对象函数一样。


### await
  await只能用在async函数内部

  await表达式会暂停当前async function的执行，等待Promise处理完成。
  若Promise正常(fulfilled)，其回调的resolve函数参数作为await表达式的值，继续执行async function。
  若Promise处理异常(rejected)，await表达式会把Promise的异常原因抛出。

  **总结：**
    1、如果一个Promise被传递给一个await操作符，await将等待Promise正常处理完成并返回其处理结果。
    2、如果传递给await的值不是一个Promise，await会把该值转换为正常处理的Promise，然后等待其处理结果。

