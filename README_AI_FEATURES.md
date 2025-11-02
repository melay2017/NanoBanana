# Nano Banana AI Image Editor - 功能说明

## 核心功能

### 1. 图片上传
- 点击 "Add Image" 区域上传图片
- 支持所有常见图片格式
- 最大文件大小：50MB

### 2. AI 图像编辑
- 在 "Main Prompt" 文本框中输入编辑指令
- 例如：
  - "make the person smile"
  - "change the background to a beach"
  - "add sunglasses to the person"
  - "make it look like winter"

### 3. 生成结果
- 点击 "Generate Now" 按钮开始处理
- 处理过程会在右侧 "Output Gallery" 显示
- 生成完成后会显示 AI 的响应文本

## 技术实现

### API 集成
- 使用 Google Gemini 2.5 Flash Image Preview 模型
- 通过 OpenRouter API 调用
- 支持图像 + 文本的多模态输入

### 文件结构
```
├── .env.local                    # API 密钥配置
├── app/api/generate/route.ts     # API 路由处理
└── components/editor.tsx         # 主要 UI 组件
```

### 使用流程
1. 用户上传图片
2. 输入编辑提示词
3. 前端发送请求到 `/api/generate`
4. API 路由调用 Gemini 2.5 Flash
5. 返回生成结果到前端显示

## 注意事项

- API 调用需要有效的 OpenRouter API 密钥
- 建议在提示词中明确描述想要的修改
- 生成时间取决于图片大小和复杂度
- 当前版本返回文本描述，后续可扩展为图像生成