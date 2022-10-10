---
title: 组件antd注意事项]
date: 2022-07-14
tags:
 - React


---
## form表单获取和重置状态

```jsx
import { Form, Button, Input } from 'antd'//1.引入antd组件
import './App.css'
import React from 'react';

function App() {
  const [form] = Form.useForm()//2.设置form.定义hooks
  const btnValue = () => {
    console.log(form.getFieldsValue());//获取form中所有的数据
    form.resetFields()//重置form中所有的数据
  }
//使用Form表单时若要控制全局,获取表单内所有内容,或清空所有内容必须要在<Form form={form}/>中添加form方法
  return (
    <div className='divbox2'>
      <Form
        name="nest-messages"
        form={form}//3.在form表单写入form
      >
        <Form.Item
          label="item1name"
          name="item1name"//4.定义子组件的name
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="item2name"
          name="item2name"
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit" onClick={btnValue}>
          Submit
        </Button>
      </Form>
    </div>
  )
}
export default App
```

## Table表格

默认有分页,若不需要可在`pagination上设置false`

```jsx
<Table columns={columns} dataSource={Tabledata.rowData} pagination={false} />
```

若需要更改其他样式的分页可在`pagination={position}引入对象`

```jsx
 const position = {
    total: Tabledata.total,
    showTotal: (total) => {
      return `总共 ${total} 条记录`
    },
    defaultPageSize: 20,
    defaultCurrent: 1
  }
//组件
<Table columns={columns} dataSource={Tabledata.rowData} pagination={position} />
```

## Modal

对话框分组件时调用与函数式调用

组件式:可加loading等按钮功能

footer:可自定义按钮

```jsx
<Modal title="Basic Modal" visible={isModalVisible} closable={false} footer={[
  <Button key="back" onClick={handleClickCancel}>
     Cance
  </Button>,
  <Button key="submit" type="primary" loading={loading} onClick={handleClickOK}>
     OK
  </Button>,
]}>
   <p>Some contents...</p>
   <p>Some contents...</p>
   <p>Some contents...</p>
</Modal>
```

函数式:方便快捷,代码量少:不可额外加自定义组件

- `Modal.info`//单个确认框
- `Modal.success`//真确
- `Modal.error`//报错
- `Modal.warning`//警告
- `Modal.confirm`//自定义

```jsx
const btnonclick = () => {
    Modal.confirm({
      content: '一个毫无内容的Modal',
      onOk: handleClickOK,//确认回调
      okText: "确认",
      onCancel: handleClickCancel,//取消回调
      cancelText: '取消',
    });
  }
<Button onClick={btnonclick}>打开modal</Button>
```

## ProTable使用
- ProTable使用
```js
  import ProTable from '@ant-design/pro-table';
```
::: details 点击查看详情
  -`request表格数据`

   是 ProTable 最重要的 API，`request`会接收一个对象。对象中必须要有 `data`和 `success,`如果需要手动分页 `total`也是必需的。`request`会接管 `loading`的设置，同时在查询表单查询和 `params`参数发生修改时重新执行。同时 查询表单的值和 `params`参数也会带入。以下是一个例子：

  ```jsx
  <ProTable<DataType, Params>
    // params 是需要自带的参数
    // 这个参数优先级更高，会覆盖查询表单的参数
    params={params}
    request={async (
      // 第一个参数 params 查询表单和 params 参数的结合
      // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
      params= {
        pageSize: number;
        current: number;
      }
    ) => {
      // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
      // 如果需要转化参数可以在这里进行修改
      const msg = await myQuery({
        page: params.current,
        pageSize: params.pageSize,
      });
      return Promise.resolve({
        data: msg.result,
        // success 请返回 true，
        // 不然 table 会停止解析数据，即使有数据
        success: boolean,
        // 不传会使用 data 的长度，如果是分页一定要传
        total: number,
      });
    }}
  />
  

  ```
  ```jsx
    hideInTable: true,//搜索表单是否显示
    hideInSearch: false,//表格中是否显示
  ```

  表格内添加node节点

  ```jsx
      {
        disable: true,
        title: '状态',
        dataIndex: 'state',
        filters: true,
        onFilter: true,
        valueType: 'select',//render有四个参数对应一行中的数据
        render: (text, record, index, action) => {
          return <Switch defaultChecked checked={record.state}
            key={record.id}
            onChange={(checked) => showConfirm(checked, record, index)}
          />
        }
      },
  ```
:::
试例代码JS
::: details 点击查看代码
```jsx
import React, { useEffect, useState, useRef } from 'react'
import { Button, Space, Tag } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ProTable from '@ant-design/pro-table';

const columns = [
  {
    title: '角色编号',
    dataIndex: 'title',
    ellipsis: true,
    hideInTable: false, //搜索表单是否显示
    hideInSearch: true, //表格中是否显示
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },
  {
    title: '用户名称',
    dataIndex: 'title',
    ellipsis: true,
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
  },

  {
    disable: true,
    title: '标签',
    dataIndex: 'labels',
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_);
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    ),
  },
  {
    title: '创建时间',
    key: 'showTime',
    search: false,
    dataIndex: 'created_at',
    valueType: 'dateTime',
    sorter: true,
    hideInSearch: false,
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    valueType: 'dateRange',
    hideInTable: true,
    hideInSearch: false,
    search: {
      transform: (value) => {
        return {
          startTime: value[0],
          endTime: value[1],
        };
      },
    },
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
    ],
  },
];
const arr = [
  {
    author_association: 'NONE',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    closed_at: null,
    comments: 1,
    created_at: '2020-05-26T09:42:56Z',
    id: 111,
    labels: [{ name: 'bug', color: 'error' }],
    locked: false,
    number: 6689,
    state: false,
    title: '[BUG]',
    updated_at: '2020-05-26T10:03:02Z',
  },
  {
    author_association: 'NONE',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    closed_at: null,
    comments: 1,
    created_at: '2020-05-26T09:42:56Z',
    id: 222,
    labels: [{ name: 'bug', color: 'error' }],
    locked: false,
    number: 6689,
    state: true,
    title: '[BUG2]',
    updated_at: '2020-05-26T10:03:02Z',
  },
  {
    author_association: 'NONE',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    closed_at: null,
    comments: 1,
    created_at: '2020-05-26T09:42:56Z',
    id: 333,
    labels: [{ name: 'bug', color: 'error' }],
    locked: false,
    number: 6689,
    state: false,
    title: '[BUG3]',
    updated_at: '2020-05-26T10:03:02Z',
  },
];

export default function Stright() {
  const [tabledata, settabledata] = useState([]);
  const actionRef = useRef();
  const promise = new Promise((resolve, reject) => {
    if (true) {
      resolve({
        data: tabledata,
        page: 1,
        success: true,
        total: 30,
      });
    }
  });
  useEffect(() => {
    settabledata(arr);
  }, []);
  return (
    <div>
      <ProTable
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={(params = {}) => {
          return promise.then((res) => ({
            success: res.success,
            data: res.data,
            total: res.total,
          }));
        }}
        editable={{
          type: 'multiple',
        }}
        columnsState={{
          persistenceKey: 'pro-table-singe-demos',
          persistenceType: 'localStorage',
          onChange(value) {
            console.log('value: ', value);
          },
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        //!工具列表隐藏
        options={false}
        form={{
          // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
          syncToUrl: (values, type) => {
            if (type === 'get') {
              return {
                ...values,
                created_at: [values.startTime, values.endTime],
              };
            }
            return values;
          },
        }}
        pagination={{
          pageSize: 5,
          onChange: (page) => console.log(page),
        }}
        dateFormatter="string"
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary">
            新建
          </Button>,

        ]}
      />
    </div>
  )
}
```
:::


- 使用Switch开关组件注意事项
::: details 点击查看
  需求,1:根据数据来显示对应的状态
  
  2:可以更改数据并关闭之前弹框,确定后才关闭,取消则保持原样
  
  ```jsx
  //表格添加dom结构,
  const [tabledata, settabledata] = useState([])//数据源
  {
        disable: true,
        title: '状态',
        dataIndex: 'state',
        filters: true,
        onFilter: true,
        valueType: 'select',
        render: (text, record, index, action) => {
  //添加Switch Dom 结构,
          return <Switch defaultChecked checked={record.state}
            key={record.id}
            onChange={(checked) => showConfirm(checked, record, index)}
          />
        }
      },
  
  const showConfirm = (checked, record, index) => {
      if (!checked) {
        tabledata[index].state = !tabledata[index].state
        settabledata([...tabledata])
        Modal.confirm({
          content: `${record.id}的Modal`,
          onOk: () => handleClickOK(record, index), //确认回调
          okText: '确认',
          onCancel: () => handleClickCancel(record, checked, index), //取消回调
          cancelText: '取消',
        });
      } else {
        tabledata[index].state = !tabledata[index].state
        settabledata([...tabledata])
      }
    }
    //确认
    const handleClickOK = (record, index) => {
      tabledata[index].state = false
      settabledata([...tabledata])
    };
  
    //取消
    const handleClickCancel = (record, checked, index) => {
      tabledata[index].state = true
      settabledata([...tabledata])
    }
  ```
:::

