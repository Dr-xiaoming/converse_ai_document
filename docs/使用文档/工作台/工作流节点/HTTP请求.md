---
title: HTTP 请求
description: FastGPT HTTP 模块介绍
sidebar_position: 10
---

# HTTP 请求

## 特点

- 可重复添加
- 手动配置
- 触发执行
- 核心模块

<!-- HTTP请求模块界面图 -->

## 介绍

HTTP 模块会向对应的地址发送一个 `HTTP` 请求，实际操作与 Postman 和 ApiFox 这类工具使用差不多。

- Params 为路径请求参数，GET请求中用的居多
- Body 为请求体，POST/PUT请求中用的居多
- Headers 为请求头，用于传递一些特殊的信息
- 自定义变量中可以接收前方节点的输出作为变量
- 3 种数据中均可以通过 `{{}}` 来引用变量
- url 也可以通过 `{{}}` 来引用变量
- 变量来自于`全局变量`、`系统变量`、`前方节点输出`

## 参数结构

### 系统变量说明

你可以将鼠标放置在`请求参数`旁边的问号中，里面会提示你可用的变量。

- appId: 应用的ID
- chatId: 当前对话的ID，测试模式下不存在
- responseChatItemId: 当前对话中，响应的消息ID，测试模式下不存在
- variables: 当前对话的全局变量
- cTime: 当前时间
- histories: 历史记录（默认最多取10条，无法修改长度）

### Params, Headers

不多描述，使用方法和Postman, ApiFox 基本一致。

可通过 `{{key}}` 来引入变量。例如：

| key | value |
| --- | --- |
| appId | `{{appId}}` |
| Authorization | Bearer `{{token}}` |

### Body

只有特定请求类型下会生效。

可以写一个`自定义的 Json`，并通过 `{{key}}` 来引入变量。例如：

### 示例：变量引用

**假设有一组变量：**
```json
{
  "string": "字符串",
  "number": 123,
  "boolean": true,
  "array": [1, 2, 3],
  "obj": {
    "name": "FastGPT",
    "url": "https://tryfastgpt.ai"
  }
}
```

**Http 模块中的Body声明：**

注意，在 Body 中，你如果引用`字符串`，则需要加上`""`，例如：`"{{string}}"`。

```json
{
  "string": "{{string}}",
  "token": "Bearer {{string}}",
  "number": {{number}},
  "boolean": {{boolean}},
  "array": [{{number}}, "{{string}}"],
  "array2": {{array}},
  "object": {{obj}}
}
```

**最终得到的解析：**
```json
{
  "string": "字符串",
  "token": "Bearer 字符串",
  "number": 123,
  "boolean": true,
  "array": [123, "字符串"],
  "array2": [1, 2, 3],
  "object": {
    "name": "FastGPT",
    "url": "https://tryfastgpt.ai"
  }
}
```

### 如何获取返回值

从图中可以看出，FastGPT可以添加多个返回值，这个返回值并不代表接口的返回值，而是代表`如何解析接口返回值`，可以通过 `JSON path` 的语法，来`提取`接口响应的值。

语法可以参考: https://github.com/JSONPath-Plus/JSONPath?tab=readme-ov-file

### 提取示例

**接口响应示例：**
```json
{
  "message": "测试",
  "data":{
      "user": {
        "name": "xxx",
        "age": 12
      },
      "list": [
        {
          "name": "xxx",
          "age": 50
        },
        [{ "test": 22 }]
      ],
      "psw": "xxx"
  }
}
```

**提取配置：**
```json
{
  "$.message": "测试",
  "$.data.user": { "name": "xxx", "age": 12 },
  "$.data.user.name": "xxx",
  "$.data.user.age": 12,
  "$.data.list": [ { "name": "xxx", "age": 50 }, [{ "test": 22 }] ],
  "$.data.list[0]": { "name": "xxx", "age": 50 },
  "$.data.list[0].name": "xxx",
  "$.data.list[0].age": 50,
  "$.data.list[1]": [ { "test": 22 } ],
  "$.data.list[1][0]": { "test": 22 },
  "$.data.list[1][0].test": 22,
  "$.data.psw": "xxx"
}
```

你可以配置对应的`key`来从`FastGPT 转化后的格式`获取需要的值，该规则遵守 JS 的对象取值规则。

### 自动格式化输出

FastGPT v4.6.8 后，加入了出参格式化功能，主要以`json`格式化成`字符串`为主。如果你的输出类型选择了`字符串`，则会将`HTTP`对应`key`的值，转成`json`字符串进行输出。因此，未来你可以直接从`HTTP`接口输出内容至`文本加工`中，然后拼接适当的提示词，最终输入给`AI对话`。

:::warning 提示
HTTP模块非常强大，你可以对接一些公开的API，来提高编排的功能。

如果你不想额外部署服务，可以使用 [Laf](https://laf.dev/) 来快速开发上线接口，即写即发，无需部署。
:::

## laf 对接 HTTP 示例

下面是在 Laf 编写的 POST 请求示例：

```javascript
export default async function (ctx: FunctionContext) {
  const { name } = ctx.body;
  
  if (!name) {
    ctx.response.status = 400;
    return {
      message: '缺少参数 name'
    };
  }
  
  return {
    message: 'success',
    data: {
      greeting: `Hello ${name}!`,
      timestamp: new Date().toISOString()
    }
  };
}
```
