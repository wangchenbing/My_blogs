---
title: Currying函数柯里化
date: 2022-09-26
tag:
 - JS
---


## 函数柯里化
### 什么是函数柯里化（curry）

函数柯里化（curry）是函数式编程里面的概念。curry的概念很简单：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

简单点来说就是：每次调用函数时，它只接受一部分参数，并返回一个函数，直到传递所有参数为止。

```jsx
// 普通的add函数
function add(x, y) {
    return x + y
}

// Currying后
function curryingAdd(x) {
    return function (y) {
        return x + y
    }
}

add(1, 2)           // 3
curryingAdd(1)(2)   // 3
```

### Currying有哪些好处

1.参数复用

2.提前确认

3.延迟运行

```jsx
// 函数参数不确定个数
    const add =(args) =>{
      console.log(this)
      return args.reduce((a, b) => a + b)
    }

    const currying =(fn) =>{
      let args = []
      return  _c = (...newArgs)=> {
        console.log(newArgs)
        if (newArgs.length) {
          args = [...args,...newArgs]
          return _c
        } else {
          console.log(this)
          // return fn.apply(this, args)
          return fn(args)
        }
      }
    }

    let addCurry = currying(add)
    console.log(addCurry(1)(2)(3)(4,5)())
```

```jsx
	//行数参数确定个数
    function add (a, b, c, d) {
      console.log(this)
      return [...arguments].reduce((a, b) => a + b)
    }

    function currying (fn) {
      let len = fn.length//4
      let args = []
      return function _c (...newArgs) {
        // 合并参数
        args = [...args,...newArgs]
        console.log(args)
        // 判断当前参数集合args的长度是否 < 目标函数fn的需求参数长度
        if (args.length < len) {
          // 继续返回函数
          return _c
        } else {
          // 返回执行结果
          console.log(this)
          return fn.apply(this, args.slice(0, len))
        }
      }
    }
    let addCurry = currying(add)
    let total = addCurry(1,2)(3)(4) 
    console.log(total) // 10

//方法2***
const curry = (fn, ...args) => args.length >= fn.length ? fn(...args): (..._args) =>curry(fn,...args, ..._args);
const add1 =(x, y, z, d)=>x + y + z + d;
const add = curry(add1);
console.log(add(1)(2, 3)(4));
```
