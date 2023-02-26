---
title: js面试题
date: 2022-9-22
tag:
 - JS面试
---


### 1.
```js
  (() => {
    let x, y;
    try {
      throw new Error()
    } catch (x) {
      x = 1, y = 2;
      console.log("No1"---,x)
    }
    console.log("No2"---,x)
    console.log("No3"---,y)
  })()
```
::: details 点击查看答案
  No1:1 <br> No2:undefined <br> No3:2
:::



### 2.
```js
  let person = { name: 'wcb' }
  const members = [person]
  person = null
  console.log(members)
```
::: details 点击查看答案
  ```js
  { name: 'wcb' }
  ```
:::



### 3.
```js
  [1 , 2, 3, 4].reduce((x, y) => console.log(x, y))
```
::: details 点击查看答案
  1,2 <br> undefined,3 <br> undefined,4
:::



### 4.
```js
  const arr = [7, 1, 4, 3, 2];
  for (const item of arr) {
    setTimeout(() => console.log(item), item);
  }
```
::: details 点击查看答案
  1-2-3-4-7
:::



### 5.
```js
  Promise.resolve().then(() => {
    console.log(0);
    return Promise.resolve(4);
  }).then((res) => {
    console.log(res)
  })
  Promise.resolve().then(() => {
    console.log(1);
  }).then(() => {
    console.log(2);
  }).then(() => {
    console.log(3);
  }).then(() => {
    console.log(5);
  }).then(() => {
    console.log(6);
  })

```
::: details 点击查看答案
  0-1-2-3-4-5-6
:::



### 6.
```js
const a = ?;
// 当a赋值为什么输出true
console.log(a == 1 && a == 2 && a == 3);// true

```
::: details 点击查看答案
```js
const a = {
  data:1,
  valueOf(){
    return this.data++
  }
};
console.log(a == 1 && a == 2 && a == 3);// true?
```
:::


### 7.
```js
  const a = [1, 2, 3]
  a.join = a.shift
  console.log(a == 1 && a == 2);
```
::: details 点击查看答案
  true
:::


### 8.
```js
(function () {
  var a = (b = 5);
})()
console.log(a);
console.log(b);
```
::: details 点击查看答案
  a  报错
  b=5
:::