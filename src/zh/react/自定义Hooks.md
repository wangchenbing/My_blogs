---
title: 自定义Hooks
date: 2022-08-23
tags:
 - React
categories:
 - 重要笔记

---
## 初始
```jsx
import { useCallback, useState, useEffect, useRef } from "react";
```

## 初次渲染触发useMount
```jsx
  export const useMount = callback => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(callback, []);
  };
```

## 组件卸载触发useUnMount
```jsx
  export const useUnMount = fn => {
    const fnRef = useRef(fn);
    fnRef.current = fn;
    useEffect(() => () => fnRef.current(), []);
  };
```

## 只有监听的状态变化才触发
```jsx
  export const useUpdate = (callback = () => { }, dependences, initialData = false) => {
    const isInitialMount = useRef(true)
    useEffect(() => {
      if (isInitialMount.current && !initialData) {
        isInitialMount.current = false
      } else {
        callback()
      }
    }, dependences)
  };
```
  ## 获取上一次状态的值

```jsx
  export const usePrevious = value => {
    const ref = useRef()
    useEffect(() => {
      ref.current = value
    }, [value])
    return ref.current
  };
  ```

  ## 异步接口请求,返回

  ```jsx
  export const useAsync = (asyncFunc) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const execute = useCallback(() => {
      setLoading(true)
      setData(null)
      setError(null)
      return asyncFunc().then(res => {
        setData(res)
        setLoading(false)
      }).catch(err => {
        setError(error)
        setLoading(false)
      })
    }, [asyncFunc])

    return { execute, loading, data, error }
  }
  ```

  ## 监听屏幕的宽高
  
  ```jsx
  export const useWinSize = () => {
    const [size, setSize] = useState({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
    const onResize = useCallback(() => {
      setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      })
    }, [])
    useEffect(() => {
      window.addEventListener('resize', onResize)
      return () => {
        window.removeEventListener('resize', onResize)
      }
    }, [])
    return size;
  };
  ```
  ## 监听鼠标位置

  ```jsx
  export const useMousePosition = () => {
    const [position, setPosition] = useState({
      x: 0,
      y: 0
    })
    useEffect(() => {
      const move = (e) => {
        setPosition({ x: e.x, y: e.y })
      }
      document.addEventListener('mousemove', move)
      return () => {
        document.removeEventListener('mousemove', move)
      }
    }, [])
    return position
  };
  ```