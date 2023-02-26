---
title: promise使用
date: 2022-07-18
tag:
 - JS
# sidebar: auto
---

<Boxx/>

**Promise** 对象用于表示一个异步操作的最终完成 (或失败)及其结果值。使得控制异步操作更加容易。可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。


传统的异步操作

```js
<script src="node_modules/jquery/dist/jquery.js"></script>
<script>
  $.ajax({
  url: 'http://liufusong.top:4000/books',
  success: function (res) {
    console.log(res)
  }
})
</script>
```

问题：请求成功之后的逻辑操作需要在回调中去完成，如果下一个异步依赖上一个异步，需要在上一个异步的回调中去处理下一次的异步，这样的代码会造成难以阅读和维护

```js
$.ajax({
  url: 'http://liufusong.top:4000/books',
  success: function (res) {
    console.log(res)
    const id = res[0]
    console.log(id)
    $.ajax({
      url: 'http://liufusong.top:4000/books/' + id,
      success: function (res2) {
        console.log(res2)
      }
    })
  }
})
```


## Promise使用介绍

Promise是一个构造函数

Promise构造函数原型上的方法，可以通过创建一个Promise实例进行调用

+ Promise.prototype.then()
+ Promise.prototype.catch()
+ Promise.prototype.finally()

Promise构造函数静态方法，直接通过Promise函数调用

+ Promise.all()
+ Promise.allSettled()
+ Promise.race()
+ Promise.reject()
+ Promise.resolve()

## 处理异步成功

利用Promise处理异步

```js
new Promise(function() {
  // 回调函数内部进行异步处理
  $.ajax({
    url: 'http://liufusong.top:4000/books',
    success: function (res) {
      console.log(res)
    }
  })
})
```

但是，现在还是需要再回调中使用数据，在回调外无法使用

通过回调函数的行参，处理成功和失败的结果

**异步成功结果处理**

```js
// 错误写法，硬是把法拉利开成了拖拉机
const promiseGetBooks = new Promise(function() {
  // 回调函数内部进行异步处理
  $.ajax({
    url: 'http://liufusong.top:4000/books',
    success: function (res) {
      $.ajax({
        
      })
    }
  })
})

// 正确写法
const promiseGetBooks = new Promise(function(resolve) {
  // 回调函数内部进行异步处理
  $.ajax({
    url: 'http://liufusong.top:4000/books',
    success: function (res) {
      resolve(res)
    }
  })
})

promiseGetBooks.then((res) => {
  console.log(res)
})
```

## 处理异步失败

```js
const promiseGetBooks = new Promise(function(resolve, reject) {
  // 回调函数内部进行异步处理
  $.ajax({
    url: 'http://liufusong.top:4000/book',
    error: function (err) {
      reject(err)
    }
  })
})

promiseGetBooks.catch((error) => {
  console.log(error)
})
```

## promise链式

```js
const promiseGetBooks = new Promise(function(resolve, reject) {
  // 回调函数内部进行异步处理
  $.ajax({
    url: 'http://liufusong.top:4000/books',
    success: function (res) {
      resolve(res)
    },
    error: function (err) {
      reject(err)
    }
  })
})

promiseGetBooks.then((res) => {
  console.log(res)
  return new Promise(function(resolve, reject) {
    // 回调函数内部进行异步处理
    $.ajax({
      url: 'http://liufusong.top:4000/books/1',
      success: function (res) {
        resolve(res)
      }
    })
  })
}).then(res=> {
  console.log(res)
  return new Promise(function(resolve, reject) {
    // 回调函数内部进行异步处理
    $.ajax({
      url: 'http://liufusong.top:4000/books/2',
      success: function (res) {
        resolve(res)
      }
    })
  })
}).then(res => {
  console.log(res)
})
```

## 封装promise

```js
const axios = (options) => {
  return new Promise(function(resolve, reject) {
    // 回调函数内部进行异步处理
    $.ajax({
      url: options.url,
      type: options.type || 'GET',
      success: function (res) {
        resolve(res)
      },
      error: function (err) {
        reject(err)
      }
    })
  })
}
```


## Promise示例
```jsx
const isPregnant = true;
const promise = new Promise((resolve, reject) => {
  if (isPregnant) {
    resolve('成功')
  } else {
    reject('失败')
  }
})
promise
  .then(res=> {
    console.log(res)
		const a = false
	  return new Promise((resolve, reject) => {
	    if (a) {
	      resolve('promise成功2')
	    } else {
	      reject('promise失败2')
	    }
	  }).then((w) => {
	    console.log(w)
	  }).catch((w)=> {
	    console.log(w)
	  })
  })
  .catch(name => {
    console.log(res)
  })
  .finally(() => {
    console.log('必须执行')
  })
```

利用promise处理异步解决回调地狱的问题

最终解决回调地狱的方法是async  await

有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数

- **Promise对象有以下2个特点**

1.对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：**Pending(进行中)、Resolved(已完成)和Rejected(已失败)。**只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态

2.一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从Pending变为Resolved；从Pending变为Rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。就算改变已经发生了，你再对Promise对象进行回调函数，也会立即得到这个结果。

- **promise对象的状态只有两种可能**

pendding->rejected，pendding->resolved

**基础用法:**

new Promise((resolved,rejected)=>{})

**Promise对象**
```
  Promise对象resolved,rejected函数，在异步事件状态pendding->resolved回调成功时，会调用resolved函数；当异步操作失败时，回调用rejected函数。
```
## then()
```
  Promise的then(resolved,rejected)函数参数有两个，一个resolved函数，一个rejected函数。
```
## catch()
```
  Promise的catch()：捕捉promise错误函数，和then函数参数中rejected作用一样，处理错误，由于Promise抛出错误具有冒泡性质，能够不断传递，会传到catch中，所以建议所有错误处理放在catch中，then中只处理成功的。

  Promise一个大特色就是可以链式调用，在then，catch中可以返回Promise对象。
```
## all()
```
  Promise.all([promise1,promise2])：参数是promise对象数组，等到所有promise对象状态resolved，该对象的状态会resolved，会立即调用then,当有一个promise对象为rejected，该对象的状态就会变成rejectd，执行catch。

  Promise.all()获得的成功结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的，即p1的结果在前，即便p1的结果获取的比p2要晚。这带来了一个绝大的好处：在前端开发请求数据的过程中，偶尔会遇到发送多个请求并根据请求顺序获取和使用数据的场景，使用Promise.all毫无疑问可以解决这个问题。
```
## race()
```
  Promise.race([promise1,promise2])：竞速函数，当有一个promise对象状态变化了，该对象就会采用和相同的状态，并执行相应函数。

  promise的生命周期

  每个 Promise都会经历一个短暂的生命周期，初始为挂起态（ pending state），这表示异步操作尚未结束。一个挂起的 Promise 也被认为是未决的（ unsettled ）。一旦异步操作结束， Promise就会被认为是已决的（ settled ），并进入两种可能状态之一：

  1. 已完成（fulfilled ）： Promise 的异步操作已成功结束；

  2. 已拒绝（rejected ）： Promise 的异步操作未成功结束，可能是一个错误，或由其他原因导致。

一旦状态改变，就「凝固」了，会一直保持这个状态，不会再发生变化。当状态发生变化，promise.then绑定的函数就会被调用。注意：Promise一旦新建就会「立即执行」，无法取消。这也是它的缺点之一。
```
通过状态码判断是否成功

```jsx
   try {
    // 成功操作
    } catch (err) {
    // 失败操作
    }
```

## 手写promise
[笔记相关文档]( https://juejin.cn/post/6945319439772434469#heading-3)
::: details 点击查看代码
  ```js
   //my-promise.js
    // 先定义三个常量表示状态
    const PENDING = 'pending';
    const FULFILLED = 'fulfilled';
    const REJECTED = 'rejected';

    // 新建 MyPromise 类
    class MyPromise {
      constructor(executor){
        // executor 是一个执行器，进入会立即执行
        // 并传入resolve和reject方法
        try {
          executor(this.resolve, this.reject)
        } catch (error) {
          this.reject(error)
        }
      }

      // 储存状态的变量，初始值是 pending
      status = PENDING;

      // resolve和reject为什么要用箭头函数？
      // 如果直接调用的话，普通函数this指向的是window或者undefined
      // 用箭头函数就可以让this指向当前实例对象
      // 成功之后的值
      value = null;
      // 失败之后的原因
      reason = null;

      // 存储成功回调函数
      onFulfilledCallbacks = [];
      // 存储失败回调函数
      onRejectedCallbacks = [];

      // 更改成功后的状态
      resolve = (value) => {
        // 只有状态是等待，才执行状态修改
        if (this.status === PENDING) {
          // 状态修改为成功
          this.status = FULFILLED;
          // 保存成功之后的值
          this.value = value;
          // resolve里面将所有成功的回调拿出来执行
          while (this.onFulfilledCallbacks.length) {
            // Array.shift() 取出数组第一个元素，然后（）调用，shift不是纯函数，取出后，数组将失去该元素，直到数组为空
            this.onFulfilledCallbacks.shift()(value)
          }
        }
      }

      // 更改失败后的状态
      reject = (reason) => {
        // 只有状态是等待，才执行状态修改
        if (this.status === PENDING) {
          // 状态成功为失败
          this.status = REJECTED;
          // 保存失败后的原因
          this.reason = reason;
          // resolve里面将所有失败的回调拿出来执行
          while (this.onRejectedCallbacks.length) {
            this.onRejectedCallbacks.shift()(reason)
          }
        }
      }

      then(onFulfilled, onRejected) {
        const realOnFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        const realOnRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason};

        // 为了链式调用这里直接创建一个 MyPromise，并在后面 return 出去
        const promise2 = new MyPromise((resolve, reject) => {

          const fulfilledMicrotask = () =>  {
            // 创建一个微任务等待 promise2 完成初始化
            queueMicrotask(() => {
              try {
                // 获取成功回调函数的执行结果
                const x = realOnFulfilled(this.value);
                // 传入 resolvePromise 集中处理
                resolvePromise(promise2, x, resolve, reject);
              } catch (error) {
                reject(error)
              } 
            })  
          }

          const rejectedMicrotask = () => { 
            // 创建一个微任务等待 promise2 完成初始化
            queueMicrotask(() => {
              try {
                // 调用失败回调，并且把原因返回
                const x = realOnRejected(this.reason);
                // 传入 resolvePromise 集中处理
                resolvePromise(promise2, x, resolve, reject);
              } catch (error) {
                reject(error)
              } 
            }) 
          }
          // 判断状态
          if (this.status === FULFILLED) {
            fulfilledMicrotask() 
          } else if (this.status === REJECTED) { 
            rejectedMicrotask()
          } else if (this.status === PENDING) {
            // 等待
            // 因为不知道后面状态的变化情况，所以将成功回调和失败回调存储起来
            // 等到执行成功失败函数的时候再传递
            this.onFulfilledCallbacks.push(fulfilledMicrotask);
            this.onRejectedCallbacks.push(rejectedMicrotask);
          }
        }) 
        
        return promise2;
      }

      catch (onRejected) {
        // 只需要进行错误处理
        this.then(undefined, onRejected);
      }

      finally (fn) {
        return this.then((value) => {
          return MyPromise.resolve(fn()).then(() => {
            return value;
          });
        }, (error) => {
          return MyPromise.resolve(fn()).then(() => {
            throw error
          });
        });
      }

      // resolve 静态方法
      static resolve (parameter) {
        // 如果传入 MyPromise 就直接返回
        if (parameter instanceof MyPromise) {
          return parameter;
        }

        // 转成常规方式
        return new MyPromise(resolve =>  {
          resolve(parameter);
        });
      }

      // reject 静态方法
      static reject (reason) {
        return new MyPromise((resolve, reject) => {
          reject(reason);
        });
      }

      static all (promiseList) {
        return new MyPromise((resolve, reject) => {
          const result = [];
          const length = promiseList.length;
          let count = 0;

          if (length === 0) {
            return resolve(result);
          }

          promiseList.forEach((promise, index) => {
            MyPromise.resolve(promise).then((value) => {
              count++;
              result[index] = value;
              if (count === length) {
                resolve(result);
              }
            }, (reason) => {
              reject(reason);
            });
          });
        });

      }

      static allSettled = (promiseList) => {
        return new MyPromise((resolve) => {
          const length = promiseList.length;
          const result = [];
          let count = 0;

          if (length === 0) {
            return resolve(result);
          } else {
            for (let i = 0; i < length; i++) {
                const currentPromise = MyPromise.resolve(promiseList[i]);
                currentPromise.then((value) => {
                  count++;
                  result[i] = {
                    status: 'fulfilled',
                    value: value
                  }
                  if (count === length) {
                    return resolve(result);
                  }
                }, (reason) => {
                  count++;
                  result[i] = {
                    status: 'rejected',
                    reason: reason
                  }
                  if (count === length) {
                    return resolve(result);
                  }
                });
            }
          }
        });
      }

      static race (promiseList) {
        return new MyPromise((resolve, reject) => {
          const length = promiseList.length;

          if (length === 0) {
            return resolve();
          } else {
            for (let i = 0; i < length; i++) {
              MyPromise.resolve(promiseList[i]).then((value) => {
                return resolve(value);
              }, (reason) => {
                return reject(reason);
              });
            }
          }
        });
      }
    }

    function resolvePromise(promise, x, resolve, reject) {
      // 如果 promise 和 x 指向同一对象，以 TypeError 为据因拒绝执行 promise
      // 这是为了防止死循环
      if (promise === x) {
        return reject(new TypeError('The promise and the return value are the same'));
      }

      if (typeof x === 'object' || typeof x === 'function') {
        // 这个坑是跑测试的时候发现的，如果x是null，应该直接resolve
        if (x === null) {
          return resolve(x);
        }

        let then;
        try {
          // 把 x.then 赋值给 then 
          then = x.then;
        } catch (error) {
          // 如果取 x.then 的值时抛出错误 e ，则以 e 为据因拒绝 promise
          return reject(error);
        }

        // 如果 then 是函数
        if (typeof then === 'function') {
          let called = false;
          // 将 x 作为函数的作用域 this 调用之
          // 传递两个回调函数作为参数，第一个参数叫做 resolvePromise ，第二个参数叫做 rejectPromise
          // 名字重名了，我直接用匿名函数了
          try {
            then.call(
              x,
              // 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
              y => {
                // 如果 resolvePromise 和 rejectPromise 均被调用，
                // 或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
                // 实现这条需要前面加一个变量called
                if (called) return;
                called = true;
                resolvePromise(promise, y, resolve, reject);
              },
              // 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
              r => {
                if (called) return;
                called = true;
                reject(r);
              });
          } catch (error) {
            // 如果调用 then 方法抛出了异常 e：
            // 如果 resolvePromise 或 rejectPromise 已经被调用，则忽略之
            if (called) return;

            // 否则以 e 为据因拒绝 promise
            reject(error);
          }
        } else {
          // 如果 then 不是函数，以 x 为参数执行 promise
          resolve(x);
        }
      } else {
        // 如果 x 不为对象或者函数，以 x 为参数执行 promise
        resolve(x);
      }
    }

    MyPromise.deferred = function () {
      var result = {};
      result.promise = new MyPromise(function (resolve, reject) {
        result.resolve = resolve;
        result.reject = reject;
      });

      return result;
    }


    module.exports = MyPromise
  ```
  ```js
  //test.js
  //已通过promises-aplus-tests测试
    const MyPromise = require('./my-promise')

    MyPromise.resolve().then(() => {
        console.log(0);
        return new MyPromise(resolve => {
            resolve(4)
        })
    }).then((res) => {
        console.log(res)
    })

    MyPromise.resolve().then(() => {
        console.log(1);
    }).then(() => {
        console.log(2);
    }).then(() => {
        console.log(3);
    }).then(() => {
        console.log(5);
    }).then(() =>{
        console.log(6);
    })
  ```
 