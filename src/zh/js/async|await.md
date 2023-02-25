---
title: async与await
date: 2023-02-25
---

### **async 函数返回值**

async 函数处理返回值的问题，它会像 Promise.prototype.then 一样，会对返回值的类型进行辨识。根据返回值的类型，引起 js引擎 对返回值处理方式的不同

- return结果值：非thenable、非promise（不等待）
- return结果值：thenable（等待 1个then的时间）
- return结果值：promise（等待 2个then的时间）

```jsx
//例1
async function testA() {
  return 1;
}

testA().then(() => console.log(1));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));

 // (不等待)最终结果👉: 1 2 3
```

```jsx
//例2
async function testB() {
  return {
    then(cb) {
      cb();
    }
  };
}

testB().then(() => console.log(1));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));

 // (等待一个then)最终结果👉: 2 1 3
```

```jsx
//例3
async function testC() {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

testC().then(() => console.log(1));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3))
  .then(() => console.log(4))

  // (等待两个then)最终结果👉: 2 3 1 4
```

```jsx
//金典面试题
async function async1() {
  console.log('1')
  await async2()
  console.log('AAA')
}

async function async2() {
  console.log('3')
  return new Promise((resolve, reject) => {
    resolve()
    console.log('4')
  })
}

console.log('5')

setTimeout(() => {
  console.log('6')
}, 0);

async1()

new Promise((resolve) => {
  console.log('7')
  resolve()
}).then(() => {
  console.log('8')
}).then(() => {
  console.log('9')
}).then(() => {
  console.log('10')
})
console.log('11')

 // 最终结果👉: 5 1 3 4 7 11 8 9 AAA 10 6
```

> 步骤拆分👇：先执行同步代码，输出5执行setTimeout，是放入宏任务异步队列中接着执行async1函数，输出1执行async2函数，输出3Promise构造器中代码属于同步代码，输出4async2函数的返回值是Promise，等待2个then后放行，所以AAA暂时无法输出async1函数暂时结束，继续往下走，输出7同步代码，输出11执行第一个then，输出8执行第二个then，输出9终于等到了两个then执行完毕，执行async1函数里面剩下的，输出AAA再执行最后一个微任务then，输出10执行最后的宏任务setTimeout，输出6

### **await右边值类型区别**

#### 非thenable

**先看例子**

```jsx
//例1
async function test() {
  console.log(1);
  await 1;
  console.log(2);
}

test();
console.log(3);

 // 最终结果👉: 1 3 2
```

```jsx
//例2
function func() {
  console.log(2);
}

async function test() {
  console.log(1);
  await func();
  console.log(3);
}

test();
console.log(4);

 // 最终结果👉: 1 2 4 3
```

```jsx
//例3
async function test() {
  console.log(1);
  await 123
  console.log(2);
}

test();
console.log(3);

Promise.resolve()
  .then(() => console.log(4))
  .then(() => console.log(5))
  .then(() => console.log(6))
  .then(() => console.log(7));

 // 最终结果👉: 1 3 2 4 5 6 7
```

> await后面接非 thenable 类型，会立即向微任务队列添加一个微任务then，但不需等待

#### thenable类型

**先看试例**

```jsx
async function test () {
    console.log(1);
    await {
        then (cb) {
            cb();
        },
    };
    console.log(2);
}

test();
console.log(3);

Promise.resolve()
    .then(() => console.log(4))
    .then(() => console.log(5))
    .then(() => console.log(6))
    .then(() => console.log(7));

// 最终结果👉: 1 3 4 2 5 6 7
```

> await 后面接 thenable 类型，需要等待一个 then 的时间之后执行

#### Promise类型

```jsx
async function test () {
    console.log(1);
    await new Promise((resolve, reject) => {
        resolve()
    })
    console.log(2);
}

test();
console.log(3);

Promise.resolve()
    .then(() => console.log(4))
    .then(() => console.log(5))
    .then(() => console.log(6))
    .then(() => console.log(7));

// 最终结果👉: 1 3 2 4 5 6 7
```

**❓为什么表现的和非 thenable 值一样呢？为什么不等待两个 then 的时间呢？**

> TC 39(ECMAScript标准制定者) 对await 后面是 promise 的情况如何处理进行了一次修改，移除了额外的两个微任务，在早期版本，依然会等待两个 then 的时间掘金上有大佬翻译了官方解释：更快的 async 函数和 promises，但在这次更新中并没有修改 thenable 的情况

```jsx
async function func () {
    console.log(1);
    await 1;
    console.log(2);
    await 2;
    console.log(3);
    await 3;
    console.log(4);
}

async function test () {
    console.log(5);
    await func();
    console.log(6);
}

test();
console.log(7);

Promise.resolve()
    .then(() => console.log(8))
    .then(() => console.log(9))
    .then(() => console.log(10))
    .then(() => console.log(11))

// 最终结果👉: 5 1 7 2 8 3 9 4 10 6 11
```

> await 和 Promise.prototype.then 虽然很多时候可以在时间顺序上能等效，但是它们之间有本质的区别。

> test 函数中的 await 会等待 func 函数中所有的 await 取得 恢复函数执行 的命令并且整个函数执行完毕后才能获得取得 恢复函数执行的命令；

> 也就是说，func 函数的 await 此时不能在时间的顺序上等效 then，而要等待到 test 函数完全执行完毕；

> 比如这里的数字6很晚才输出，如果单纯看成then的话，在下一个微任务队列执行时6就应该作为同步代码输出了才对。

- --所以我们可以合并两个函数的代码👇

```jsx
async function test () {
    console.log(5);

    console.log(1);
    await 1;
    console.log(2);
    await 2;
    console.log(3);
    await 3;
    console.log(4);
    await null;

    console.log(6);
}

test();
console.log(7);

Promise.resolve()
    .then(() => console.log(8))
    .then(() => console.log(9))
    .then(() => console.log(10))
    .then(() => console.log(11));

// 最终结果👉: 5 1 7 2 8 3 9 4 10 6 11
```

- --因为将原本的函数融合，此时的 await 可以等效为 Promise.prototype.then，又完全可以等效如下代码👇

```jsx
async function test () {
    console.log(5);
    console.log(1);
    Promise.resolve()
        .then(() => console.log(2))
        .then(() => console.log(3))
        .then(() => console.log(4))
        .then(() => console.log(6))
}

test();
console.log(7);

Promise.resolve()
    .then(() => console.log(8))
    .then(() => console.log(9))
    .then(() => console.log(10))
    .then(() => console.log(11));

// 最终结果👉: 5 1 7 2 8 3 9 4 10 6 11
```

- --以上三种写法在时间的顺序上完全等效，所以你 完全可以将 await 后面的代码可以看做在 then 里面执行的结果，又因为 async 函数会返回 promise 实例，所以还可以等效成👇

```jsx
async function test () {
    console.log(5);
    console.log(1);
}

test()
    .then(() => console.log(2))
    .then(() => console.log(3))
    .then(() => console.log(4))
    .then(() => console.log(6))

console.log(7);

Promise.resolve()
    .then(() => console.log(8))
    .then(() => console.log(9))
    .then(() => console.log(10))
    .then(() => console.log(11));

// 最终结果👉: 5 1 7 2 8 3 9 4 10 6 11
```

### 例子

**例1**

```jsx
async function async2 () {
	new Promise((resolve, reject) => {
		resolve()
	})
}

async function async3 () {
	return new Promise((resolve, reject) => {
		resolve()
	})
}

async function async1 () {
	// 方式一：最终结果：B A C D
	// await new Promise((resolve, reject) => {
	// 		resolve()
	// })

	// 方式二：最终结果：B A C D
	// await async2()

	// 方式三：最终结果：B C D A
	await async3()

	console.log('A')
}

async1()

new Promise((resolve) => {
	console.log('B')
	resolve()
}).then(() => {
	console.log('C')
}).then(() => {
	console.log('D')
})

```

> 首先，async函数的整体返回值永远都是Promise，无论值本身是什么方式一：await的是Promise，无需等待方式二：await的是async函数，但是该函数的返回值本身是非thenable，无需等待方式三：await的是async函数，且返回值本身是Promise，需等待两个then时间

**例2**

```jsx
function func () {
	console.log(2);

	// 方式一：1 2 4  5 3 6 7
	// Promise.resolve()
		// .then(() => console.log(5))
		// .then(() => console.log(6))
		// .then(() => console.log(7))

	// 方式二：1 2 4  5 6 7 3
	return Promise.resolve()
		.then(() => console.log(5))
		.then(() => console.log(6))
		.then(() => console.log(7))
}

async function test () {
	console.log(1);
	await func();
	console.log(3);
}

test();
console.log(4);
```

> 方式一：

> 同步代码输出1、2，接着将log(5)处的then1加入微任务队列，await拿到确切的func函数返回值undefined，将后续代码放入微任务队列（then2，可以这样理解）执行同步代码输出4，到此，所有同步代码完毕执行第一个放入的微任务then1输出5，产生log(6)的微任务then3执行第二个放入的微任务then2输出3然后执行微任务then3，输出6，产生log(7)的微任务then4执行then4，输出7

> 方式二：

> 同步代码输出1、2，await拿到func函数返回值，但是并未获得具体的结果（由Promise本身机制决定），暂停执行当前async函数内的代码（跳出、让行）输出4，到此，所有同步代码完毕await一直等到Promise.resolve().then...执行完成，再放行输出3

**例3**

```jsx
async function func () {
	console.log(2);
	return {
		then (cb) {
			cb()
		}
	}
}

async function test () {
	console.log(1);
	await func();
	console.log(3);
}

test();
console.log(4);

new Promise((resolve) => {
	console.log('B')
	resolve()
}).then(() => {
	console.log('C')
}).then(() => {
	console.log('D')
})

// 最终结果👉: 1 2 4 B C 3 D
```
> 步骤拆分👇：
>
> - 同步代码输出1、2
> - await拿到func函数的具体返回值thenable，将当前async函数内的后续代码放入微任务then1(但是需要等待一个then时间)
> - 同步代码输出4、B，产生log(C)的微任务then2
> - 由于then1滞后一个then时间，直接执行then2输出C，产生log(D)的微任务then3
> - 执行原本滞后一个then时间的微任务then1，输出3
> - 执行最后一个微任务then3输出D

### **总结**
> async函数返回值结论：async函数在抛出返回值时，会根据返回值类型开启不同数目的微任务
>
> - return结果值：非thenable、非promise（不等待）
> - return结果值：thenable（等待 1个then的时间）
> - return结果值：promise（等待 2个then的时间）
>
> await右值类型区别
>
> - 接非 thenable 类型，会立即向微任务队列添加一个微任务then，但不需等待
> - 接 thenable 类型，需要等待一个 then 的时间之后执行
> - 接Promise类型(有确定的返回值)，会立即向微任务队列添加一个微任务then，但不需等待
> - TC 39 对await 后面是 promise 的情况如何处理进行了一次修改，移除了额外的两个微任务，在早期版本，依> 然会等待两个 then 的时间