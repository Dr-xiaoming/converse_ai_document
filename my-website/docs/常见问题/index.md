---
sidebar_position: 1
---

# 常见问题

FastGPT 使用过程中的常见问题解答，帮助您快速解决使用中遇到的问题。

## 🚀 快速开始

### Q: 如何快速体验 FastGPT？
**A:** 您可以通过以下方式快速开始：
- **在线体验**：访问 [fastgpt.cn](https://fastgpt.cn) 或 [fastgpt.io](https://fastgpt.io)
- **本地部署**：参考[部署文档](https://doc.fastgpt.cn/docs/development/intro/)
- **Docker 部署**：使用官方 Docker 镜像一键部署

### Q: FastGPT 支持哪些 AI 模型？
**A:** FastGPT 支持多种主流 AI 模型：
- **OpenAI 系列**：GPT-3.5-turbo, GPT-4, GPT-4-turbo
- **国产模型**：文心一言、通义千问、讯飞星火
- **开源模型**：ChatGLM、LLaMA、Vicuna 等
- **自定义模型**：支持接入自训练模型

### Q: 免费版本有什么限制？
**A:** 开源版本功能对比：

| 功能 | 开源版 | 商业版 |
|------|-------|--------|
| 基础对话 | ✅ | ✅ |
| 知识库 | ✅ | ✅ |
| 工作流 | ✅ | ✅ |
| API 调用 | ✅ | ✅ |
| Web 站点同步 | ❌ | ✅ |
| 集合标签 | ❌ | ✅ |
| 高级插件 | ❌ | ✅ |
| 技术支持 | 社区 | 专业服务 |

## 📚 知识库相关

### Q: 支持哪些文档格式？
**A:** FastGPT 支持多种文档格式：
- **文档类型**：PDF、Word、Excel、PPT、TXT、Markdown
- **网页内容**：HTML、网站链接
- **结构化数据**：JSON、CSV、XML
- **图片文件**：PNG、JPG（需 OCR 功能）
- **音视频**：MP3、MP4（需转录功能）

### Q: 如何提高知识库搜索准确性？
**A:** 优化搜索准确性的方法：

#### 1. 内容质量优化
- **结构化处理**：保持文档结构清晰
- **关键词丰富**：确保内容包含相关关键词
- **去重处理**：删除重复或相似内容
- **定期更新**：保持内容时效性

#### 2. 分块策略调整
- **合理分块大小**：建议 200-800 字符
- **保持语义完整**：避免在句子中间分块
- **重叠设置**：设置适当的重叠长度

#### 3. 搜索参数调优
- **相似度阈值**：调整匹配相似度（建议 0.3-0.8）
- **返回数量**：设置合适的返回结果数量
- **重排序**：启用搜索结果重排序

### Q: 知识库导入失败怎么办？
**A:** 导入失败的排查步骤：

#### 1. 检查文件格式
```bash
# 检查文件是否损坏
file document.pdf

# 检查文件编码
chardet document.txt
```

#### 2. 查看错误日志
- 在导入页面查看详细错误信息
- 检查系统资源使用情况
- 查看后台日志文件

#### 3. 常见解决方案
- **文件过大**：分割大文件或增加服务器内存
- **格式不支持**：转换为支持的格式
- **编码问题**：转换为 UTF-8 编码
- **权限问题**：检查文件访问权限

## 🤖 AI 对话相关

### Q: 如何选择合适的 AI 模型？
**A:** 模型选择建议：

#### 场景匹配
- **日常对话**：GPT-3.5-turbo（成本低，响应快）
- **专业问答**：GPT-4（准确性高，理解能力强）
- **代码生成**：Code-Davinci（专业代码能力）
- **多语言场景**：支持目标语言的模型

#### 性能考虑
- **响应速度**：3.5 > 4.0 > 4-turbo
- **准确性**：4-turbo > 4.0 > 3.5
- **成本**：3.5 < 4.0 < 4-turbo

### Q: 如何设置有效的提示词？
**A:** 提示词设计原则：

#### 1. 明确角色定位
```
你是一个专业的客服助手，具有以下特点：
- 耐心友好，乐于助人
- 专业准确，基于事实回答
- 简洁明了，避免冗长
```

#### 2. 设置回答格式
```
请按照以下格式回答：
1. 首先确认用户问题
2. 提供准确的解答
3. 如果需要，给出具体步骤
4. 询问是否还有其他问题
```

#### 3. 限制回答范围
```
只回答与产品相关的问题，对于超出范围的问题，
请礼貌地引导用户联系相关部门。
```

### Q: AI 回答不准确怎么优化？
**A:** 优化 AI 回答准确性：

#### 1. 优化知识库
- **补充相关内容**：添加更多相关资料
- **更新过时信息**：定期更新知识库内容
- **标准化表述**：统一专业术语和表达方式

#### 2. 调整模型参数
- **降低温度值**：减少随意性（建议 0.1-0.3）
- **限制输出长度**：避免啰嗦的回答
- **调整 top_p 值**：控制回答的多样性

#### 3. 优化提示词
- **添加示例**：提供标准回答示例
- **明确要求**：具体说明回答要求
- **设置约束**：限制不当回答

## ⚙️ 工作流相关

### Q: 工作流执行失败怎么调试？
**A:** 工作流调试步骤：

#### 1. 检查节点连接
- 确认所有节点正确连接
- 检查数据流向是否正确
- 验证必需参数是否传递

#### 2. 逐步调试
```
1. 从简单节点开始测试
2. 逐个添加复杂节点
3. 检查每个节点的输入输出
4. 验证数据格式是否正确
```

#### 3. 查看执行日志
- 在工作流页面查看执行记录
- 检查每个节点的执行状态
- 分析错误信息和堆栈跟踪

### Q: 如何提高工作流执行效率？
**A:** 性能优化建议：

#### 1. 节点优化
- **减少不必要节点**：简化工作流结构
- **并行处理**：使用并行分支提高效率
- **缓存结果**：缓存重复计算结果

#### 2. 参数调优
- **合理设置超时时间**：避免长时间等待
- **优化 API 调用频率**：避免频繁调用
- **调整批处理大小**：优化批处理参数

## 🔧 部署运维

### Q: 如何进行系统监控？
**A:** 监控项目和方法：

#### 系统指标
- **CPU 使用率**：保持在 70% 以下
- **内存使用率**：保持在 80% 以下
- **磁盘空间**：保持足够的存储空间
- **网络带宽**：监控网络使用情况

#### 应用指标
- **响应时间**：API 响应时间
- **成功率**：请求成功率
- **并发数**：同时处理的请求数
- **错误率**：系统错误率

#### 监控工具
```yaml
# Prometheus 配置示例
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'fastgpt'
    static_configs:
      - targets: ['localhost:3000']
```

### Q: 如何备份和恢复数据？
**A:** 数据备份策略：

#### 1. 数据库备份
```bash
# MongoDB 备份
mongodump --db fastgpt --out /backup/

# 恢复数据
mongorestore --db fastgpt /backup/fastgpt/
```

#### 2. 文件备份
```bash
# 备份上传文件
tar -czf files_backup.tar.gz /app/files/

# 恢复文件
tar -xzf files_backup.tar.gz -C /app/
```

#### 3. 配置备份
- **环境变量**：备份 .env 配置文件
- **系统配置**：备份 config.json 文件
- **定制化内容**：备份自定义模板和插件

## 📱 集成开发

### Q: 如何通过 API 调用 FastGPT？
**A:** API 使用示例：

#### 1. 获取 API Key
```javascript
// 在应用设置中获取 API Key
const apiKey = 'fastgpt-xxxxxxxxxxxx';
```

#### 2. 发送请求
```javascript
const response = await fetch('https://api.fastgpt.cn/api/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    chatId: 'chat_id',
    stream: false,
    detail: false,
    messages: [
      {
        content: '你好，请介绍一下FastGPT',
        role: 'user'
      }
    ]
  })
});

const data = await response.json();
console.log(data);
```

#### 3. 处理响应
```javascript
if (data.choices && data.choices.length > 0) {
  const answer = data.choices[0].message.content;
  console.log('AI回答:', answer);
} else {
  console.log('请求失败:', data.error);
}
```

### Q: 如何集成到微信小程序？
**A:** 微信小程序集成步骤：

#### 1. 配置服务器域名
在微信小程序后台添加 API 域名到 request 合法域名列表。

#### 2. 封装请求函数
```javascript
// utils/fastgpt.js
function callFastGPT(message) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://api.fastgpt.cn/api/v1/chat/completions',
      method: 'POST',
      header: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
      },
      data: {
        messages: [{ content: message, role: 'user' }]
      },
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(res);
        }
      },
      fail: reject
    });
  });
}
```

## 🛡️ 安全相关

### Q: 如何保护 API 密钥安全？
**A:** API 密钥安全措施：

#### 1. 存储安全
- **环境变量**：使用环境变量存储密钥
- **密钥管理系统**：使用专业密钥管理工具
- **定期轮换**：定期更换 API 密钥

#### 2. 传输安全
- **HTTPS 加密**：确保使用 HTTPS 传输
- **请求签名**：使用请求签名验证
- **IP 白名单**：限制访问 IP 范围

#### 3. 使用限制
- **权限控制**：设置最小权限原则
- **频率限制**：设置 API 调用频率限制
- **监控告警**：监控异常使用情况

### Q: 如何防止数据泄露？
**A:** 数据保护措施：

#### 1. 访问控制
- **用户权限管理**：严格控制用户访问权限
- **数据分类**：对数据进行敏感性分类
- **审计日志**：记录所有数据访问操作

#### 2. 数据加密
- **传输加密**：使用 TLS/SSL 加密传输
- **存储加密**：对敏感数据进行存储加密
- **备份加密**：对备份数据进行加密

## 💬 获取帮助

### 还有其他问题？

#### 1. 查看文档
- **官方文档**：[https://doc.fastgpt.cn](https://doc.fastgpt.cn)
- **API 文档**：详细的 API 使用说明
- **部署指南**：完整的部署文档

#### 2. 社区支持
- **GitHub Issues**：[https://github.com/labring/FastGPT/issues](https://github.com/labring/FastGPT/issues)
- **社区论坛**：与其他用户交流经验
- **QQ 群**：加入官方 QQ 群获取帮助

#### 3. 商业支持
- **技术咨询**：专业的技术咨询服务
- **定制开发**：根据需求定制功能
- **培训服务**：提供使用培训和最佳实践

---

*如果以上答案没有解决您的问题，请通过社区或客服联系我们获取更多帮助。*
