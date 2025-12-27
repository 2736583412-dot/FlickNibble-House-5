# FlickNibble House 官方网站

这是FlickNibble House的官方网站，一个专注于"电影+餐饮"创新体验的品牌，同时提供"10天5城日本夏日限量游"旅游套餐服务。

## 项目简介

FlickNibble House是一个创新型的"电影+餐饮"体验品牌，通过基于场景的订餐、不间断送餐等服务，打破观影与用餐的界限。本网站展示了品牌的核心业务、日本旅游套餐、领导团队以及联系方式等信息，支持中、英、日三种语言切换。

## 技术栈

- React 18+
- TypeScript
- Tailwind CSS
- React Router DOM
- Framer Motion (用于动画效果)
- Sonner (用于通知提示)
- Recharts (数据可视化)

## 项目结构

```
├── .gitignore              # Git忽略文件配置
├── README.md               # 项目说明文档
├── index.html              # HTML入口文件
├── package.json            # 项目依赖配置
├── pnpm-lock.yaml          # 依赖版本锁定文件
├── postcss.config.js       # PostCSS配置
├── src                     # 源代码目录
│   ├── App.tsx             # 应用主组件
│   ├── components          # 通用组件
│   │   ├── Empty.tsx       # 空内容组件
│   │   ├── Footer.tsx      # 页脚组件
│   │   └── Navbar.tsx      # 导航栏组件
│   ├── contexts            # 全局上下文
│   │   ├── authContext.ts  # 认证上下文
│   │   └── languageContext.tsx  # 语言切换上下文
│   ├── hooks               # 自定义钩子
│   │   └── useTheme.ts     # 主题切换钩子
│   ├── index.css           # 全局样式文件
│   ├── lib                 # 工具函数
│   │   └── utils.ts        # 通用工具函数
│   ├── main.tsx            # 应用入口文件
│   ├── pages               # 页面组件
│   │   ├── About           # 关于我们页面
│   │   ├── Contact         # 联系我们页面
│   │   ├── Home.tsx        # 首页
│   │   ├── Products        # 产品服务页面
│   │   └── WhyUs           # 为什么选择我们页面
│   └── vite-env.d.ts       # Vite环境类型定义
├── tailwind.config.js      # Tailwind配置
├── tsconfig.json           # TypeScript配置
└── vite.config.ts          # Vite配置
```

## 快速开始

### 前提条件

确保您的系统中已安装以下软件：
- Node.js (v14+)
- npm, yarn 或 pnpm

### 安装依赖

使用pnpm安装项目依赖：

```bash
pnpm install
```

或者使用npm：

```bash
npm install
```

或者使用yarn：

```bash
yarn install
```

### 启动开发服务器

```bash
pnpm dev
```

或者使用npm：

```bash
npm run dev
```

或者使用yarn：

```bash
yarn dev
```

开发服务器将在 http://localhost:3000 启动。

### 构建生产版本

```bash
pnpm build
```

或者使用npm：

```bash
npm run build
```

或者使用yarn：

```bash
yarn build
```

构建后的文件将生成在 `dist` 目录中。

## 功能特性

- **响应式设计**：适配不同屏幕尺寸的设备
- **多语言支持**：中、英、日三种语言切换
- **优雅的UI设计**：现代、简洁的用户界面
- **动画效果**：提升用户体验的平滑动画
- **完整的导航系统**：清晰的页面导航结构
- **日本旅游套餐展示**：详细的行程安排和价格信息
- **领导团队介绍**：展示公司核心成员信息
- **联系表单**：用户可以通过表单提交咨询

## 部署说明

项目构建后，可以将 `dist` 目录中的文件部署到任何静态网站托管服务上，如：

- GitHub Pages
- Vercel
- Netlify
- 阿里云OSS
- 腾讯云COS等

## 贡献指南

如果您想为项目做出贡献，请遵循以下步骤：

1. Fork 项目仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 版权信息

© 2025 FlickNibble House. 保留所有权利。