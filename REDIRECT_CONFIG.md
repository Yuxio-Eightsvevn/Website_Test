# 网站跳转配置说明

## redirect-config.json 配置文件

该文件用于控制网站的跳转行为，位于项目根目录。

### 配置项说明

```json
{
  "enabled": false,
  "target_url": "https://example.com",
  "delay_seconds": 0
}
```

- **enabled**: 是否启用跳转功能
  - `true`: 启用跳转
  - `false`: 不跳转，显示正常网页

- **target_url**: 跳转的目标URL
  - 设置为要跳转到的完整网址

- **delay_seconds**: 跳转延迟时间（秒）
  - `0`: 立即跳转
  - `1`: 1秒后跳转
  - 可根据需要设置延迟时间

### 使用示例

#### 立即跳转到百度
```json
{
  "enabled": true,
  "target_url": "https://www.baidu.com",
  "delay_seconds": 0
}
```

#### 3秒后跳转到个人GitHub
```json
{
  "enabled": true,
  "target_url": "https://github.com/yourusername",
  "delay_seconds": 3
}
```

#### 禁用跳转，显示正常网页
```json
{
  "enabled": false,
  "target_url": "https://example.com",
  "delay_seconds": 0
}
```

### 注意事项

1. 修改配置后需要刷新页面生效
2. 确保目标URL是有效的
3. 测试跳转功能时建议先设置较长的延迟时间