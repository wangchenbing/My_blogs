---
title: js封装工具
date: 2022-08-04
tag:
 - JS
---


## 终止promise  
> AbortController 接口的 abort() 方法会在 DOM 请求完成之前中止它。它能够中止 fetch 请求、各种响应主体或者流的消耗。

> 我们首先使用 AbortController() 构造函数创建一个 controller，然后使用 AbortController.signal 属性获取到它关联的 AbortSignal 对象的引用。

>当 fetch 请求初始化时，我们将 AbortSignal 作为一个选项传递进入请求的选项对象中（下面的 {signal}）。这将 signal 和 controller 与 fetch 请求相关联，并且允许我们通过调用 AbortController.abort() 去中止它
```jsx
//语法
//abort()
//abort(reason)
// reason：操作中止的原因，可以是各种 JavaScript 值
let controller: any;

const aboutFun = () => {
  controller?.abort();
  controller = new AbortController()
}

const queryUserList1Fun = async () => {
//调用接口
  const res: any = await queryUserList1({}, { signal: controller?.signal })
//保存并渲染数据
  setListData(res?.data?.list)
}

const queryUserList2Fun = async () => {
  const res: any = await queryUserList2({}, { signal: controller?.signal })
  setListData(res?.data?.list)
}

const onChange = (key: string) => {
  aboutFun()
  if (key === 'A_Com') {
    queryUserList1Fun()
  } else {
    queryUserList2Fun()
  }
};
```

## 保留小数点  
> 这里为啥不用toFixed(n) 呢， 因为toFixed默认会四舍五入 不知道大家发现了木有 所以这里找到了一个新方法 推荐一下

```javaScript
function toFixed(n, fixed) {
    return ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed)
}
```
## JS滚动屏幕到顶端的几种方法

- 与带id的元素绑定使用
- document.documentElement.scrollTop = 0 / document.body.scrollTop = 0
- scrollTo(0,0) 一般用于相对于整个页面来说
- scrollBy(x,y) 一般用于相当于当前元素的滚动 ，可以传入当前元素相对于顶端的值，即document.documentElement.scrollTop
- scrollIntoView()和要跳转的元素绑定，使元素进入视口

> 获取滚动条具体位置,切换页面时保存之前滚动记录
::: details 点击查看代码
```jsx
const Welcome = () => {

  let a = []
  const func = (num) => {
    for (let i = 1; i <= num; i++) {
      a.push(i)
    }
  }
  func(1000)

  const scrollChange = () => {
    //获取滚动了多少距离
    const ScrollTop = document.getElementById('overbox').scrollTop
    console.log(ScrollTop);
    //本地保存滚动距离
    sessionStorage.setItem('overboxheigth', ScrollTop)
  }
  //监听
  useEffect(() => {
    //获取上一次滚动的位置
    document.getElementById('overbox').scrollTop = sessionStorage.getItem('overboxheigth');
    //监听滚动事件
    window.addEventListener('scroll', scrollChange, true)
    scrollChange()
    //关闭时取消监听滚动事件
    return () => {
      window.removeEventListener('scroll', scrollChange, false)
    }
  }, [])

  //回滚到顶部
  const btngun = () => {
    var timer = setInterval(function () {
      let osTop = document.getElementById('overbox').scrollTop || document.body.scrollTop;
      let ispeed = Math.floor(-osTop / 5);
      document.getElementById('overbox').scrollTop = document.body.scrollTop = osTop + ispeed;
      this.isTop = true;
      //当到达顶部时清除定时器
      if (osTop === 0) {
        clearInterval(timer);
      }
    }, 30)
  }

  return (
    <PageContainer >
      <button onClick={btngun}>滚到顶部</button>
      {/* 设置大小 */}
      <div style={{ overflowY: 'auto', height: document.body.clientHeight - 130 }} id='overbox'>
        <ul>
          {a.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </PageContainer>);
}
```
:::
## 过滤对象中为空的属性
```js
/**
 * 过滤对象中为空的属性
 * @param obj
 * @returns {*}
 */

function filterObj(obj) {
  if (!(typeof obj == 'object')) {
    return;
  }

  for ( var key in obj) {
    if (obj.hasOwnProperty(key)
      && (obj[key] == null || obj[key] == undefined || obj[key] === '')) {
      delete obj[key];
    }
  }
  return obj;
}

```
## 检测对象是否为空 
```js
  const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
  isEmpty({}) // true
  isEmpty({a:"not empty"}) //false
```
## 反转字符串 

```js 
  const reverse = str => str.split('').reverse().join('');
  reverse('this is reverse');// esrever si siht
```
## 节流 throttle

指定时间间隔内只会执行一次任务

常用于滚动条滚动监听等
```js
  const throttle = (fn, delay=500) => {
    // 通过Data节流
    // let lastTime, time
    // return  () => {
    //   time = Date.now()
    //   if (!lastTime || time - lastTime > delay) {
    //     fn()
    //     lastTime = time
    //   }
    // }

    //通过setTimer节流
    let timer = null
    return () => {
      if (timer) return
      timer = setTimeout(() => {
        fn()
        timer = null
      }, delay)
    }
  }

  const b = throttle(() => { console.log('节流') }, 500)

  const onClickfun = () => {
    b()
  }
```
## 防抖 debounce

任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行<br/>
即：用户在不触发事件时，才触发相应动作，以抑制本来在事件中要执行的动作。<br/>
常用于用户输入验证等<br/>

```js
  const debounce = (fn, waitTime) => {
    let timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => { fn() }, waitTime);
    };
  }

  const a = debounce(() => { console.log('防抖') }, 500)

  const clickfunnfangdou = () => {
    a()
  }
```
## 嵌套页面object

路由中嵌套百度或者其他网站

```jsx
<Route
  excat
  path={"/approval-process/data-apply"}
  // component={ApprovalProcessApproval}
  // render={() => <iframe src="http://baidu.com" className="iframebox" />}
	//点击路由进行跳转固定url 首选
	render={() => <object data="http://baidu.com" className="iframebox" type="text/html" />}
/>            

```
## Base64转blob对象
```js
// Base64转Blob
function base642Blob (code) {
  let parts = code.split(';base64,')
  let contentType = parts[0].split(':')[1]
  let raw = window.atob(parts[1])
  let rawLength = raw.length

  let uInt8Array = new Uint8Array(rawLength)

  for (let i = 0; i < rawLength; i++) {
    uInt8Array[i] = raw.charCodeAt(i)
  }

  return new Blob([uInt8Array], {
    type: contentType
  })
},
```
## 数字千分位分割
```js
function commafy(num) {
  return (
    num.toString().indexOf('.') !== -1) ? 
    num.toLocaleString() : 
    num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'
  )
}
```
## 万转换亿
```js
const abs = (val) => {
  var str = (val / 10000).toFixed(4) + '';
  var intSum = str.substring(0, str.indexOf(".")).replace(/\B(?=(?:\d{3})+$)/g, ',');//取到整数部分
  var dot = str.substring(str.length, str.indexOf("."))//取到小数部分搜索
  var ret = intSum + dot;
  return ret;
}
```
## 生成随机数
```js
function randomNum(min, max) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * min + 1, 10)
    case 2:
      return parseInt(Math.random() * (max - min + 1) + min, 10)
    default:
      return 0
  }
}
```
## 数字转成中文
```js
  const toChineseNum = num => {
    num += ''
    let numLength = num.length
    let numStr = '零一二三四五六七八九十'
    let unitArr = ['', '十', '百', '千', '万']

    function getResult(str) {
      let res = '';
      if (str.length > 5) {
        let first = str.slice(-5);
        let second = str.slice(0, str.length - 5);
        for (let i in second) {
          res = res + numStr[second[i]] + unitArr[second.length - i];
        }
        for (let i in first) {
          res = res + numStr[first[i]] + unitArr[first.length - i - 1];
        }
      } else {
        let first = str.slice(-5);
        for (let i in first) {
          res = res + numStr[first[i]] + unitArr[first.length - i - 1];
        }
      }
      res = res.replace(/零[零十百千]+/g, '零').replace(/零+$/g, '').replace(/零万/g, '万')
      return res;
    }

    if (numLength > 8) {
      return getResult(num.slice(0, numLength - 8)) + '亿' + getResult(num.slice(-8))
    }
    return getResult(num)
  };
```
## 数字逗号分隔
```js 
  const commafy = num => {
    let numStr = num + '';
    let arr = num < 0 ? numStr.slice(1).split('.') : numStr.split('.');
    let a = arr[0].split(''); // 整数部分切割成数组
    for (let i = a.length - 3; i > 0; i = i - 3) {
      a.splice(i, 0, ',')
    }
    let res = arr[1] ? a.join('') + '.' + arr[1] : a.join('')
    return num < 0 ? '-' + res : res;
  };
  console.log(commafy(12564654.456456)) // 12,564,654.456456
```
## 16进制颜色值转RGB值
```js
  const hexToRGB = (hex) => {
    if (!/(^\#([a-fA-F0-9]{3})$)|(^\#([a-fA-F0-9]{6})$)/g.test(hex)) return null
    let allNumberStr = '0123456789abcdef' // 十六进制的所有数字
    let len = hex.slice(1).length;
    let str = len === 6 ? hex.slice(1) : hex.slice(1)[0].repeat(2) + hex.slice(1)[1].repeat(2) + hex.slice(1)[2].repeat(2);
    let arrStr = str.split('');
    let newArrStr = arrStr.map((item, index) => {
      return allNumberStr.indexOf((item + '').toLowerCase())
    })
    let num1 = newArrStr[0] * 16 + newArrStr[1];
    let num2 = newArrStr[2] * 16 + newArrStr[3];
    let num3 = newArrStr[4] * 16 + newArrStr[5];
    return `rgb(${num1}, ${num2}, ${num3})`
  }
  hexToRGB('#ffffff') //'rgb(255, 255, 255)'
```
## 将 RGB 转换为十六进制
```js
  const rgbToHex = (r, g, b) =>   "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  rgbToHex(255, 255, 255); //  #ffffff
```
## 随机生成16进制颜色
```js
  const randomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
  console.log(randomHexColor());// #a2ce5b
```
## 两个字符串相加
```js
  const add = (a, b) => {
    // 看看两个字符串长度相差多少，小的在前面补0， 如 10000 和 1， 补0后为 10000 和 00001
    let leng = Math.abs(a.length - b.length);
    if (a.length > b.length) {
      b = Array(leng).join('0') + '0' + b;
    } else if (a.length < b.length) {
      a = Array(leng).join('0') + '0' + a;
    }
    // 将字符串转化为数组并且倒装，如同小学加法从个位开始算起
    let textArrA = a.split('').reverse(),
      textArrB = b.split('').reverse(),
      resultArr = [];

    // 对数组进行循环
    for (let i = 0; i < a.length; i++) {
      // 求和，和小于10，则将和放进目标数组，若大于10，将除以10将余数放进目标数组，然后textArrA数组的下一位 + 1（textArrB数组也可以，选一个即可）
      let sum = parseInt(textArrA[i]) + parseInt(textArrB[i]);

      // 这里判断是否是最高位数值相加，即i === a.length - 1， 如果是不用取余直接放进去
      if (parseInt(sum / 10) === 0 || i === a.length - 1) {
        resultArr.push(sum);
      } else {
        resultArr.push(sum % 10);
        textArrA[i + 1] = parseInt(textArrA[i + 1]) + 1;
      }
    }
    // 最后将目标数组倒装一下，再转成字符串
    return resultArr.reverse().join('');
  };
  console.log(add('1045747', '10')); // 1045757

```
## 检测两日期差多少 

```js
  const dayDiff = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
  console.log(dayDiff(new Date("2022-9-26"), new Date("2022-10-1")));  // 5
```
## 树状数据扁平化
```js
let data = [
  {
    "name": "北京市", "code": "11", "children":
      [
        {
          "name": "市辖区", "code": "1101", "children":
            [
              {
                "name": "东城区", "code": "110101", "children":
                  []
              }
            ]
        }
      ]
  },
  {
    "name": "天津市", "code": "12", "children":
      [
        {
          "name": "市辖区", "code": "1201", "children":
            [
              {
                "name": "河北区", "code": "120105", "children":
                  []
              }
            ]
        }
      ]
  },]

function flat(data) {
  return data.reduce((pre, cur) => {
    // console.log(cur);
    //此处将对象的children属性和值都解构在空数组中，将对象的其他属性和值都解构在i里面。
    const { children = [], ...i } = cur;   // 注意 ...i 只能写在解构赋值的末尾，否则报错
    // console.log(i);
    // // console.log(children);
    return pre.concat([{ ...i }], flat(children))  //利用递归回调,数组合并,注意此处 {...i}是解构
  }, []);
}
console.log(flat(data))
```
