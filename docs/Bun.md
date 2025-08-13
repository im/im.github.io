
## 一、Bun 是什么？

Bun 是一个由 **JavaScript/TypeScript** 开发的 **全能运行时（runtime）**，类似于 Node.js 或 Deno，但它更快、更轻量。

它的主要功能包括：

- **运行 JavaScript/TypeScript 文件**（无需编译）
- **作为包管理器**（替代 npm、yarn、pnpm）
- **内置打包器**（替代 webpack、esbuild、vite 部分功能）
- **内置测试框架**（无需额外安装 jest/mocha）
- **内置 SQLite 数据库支持**

> **一句话总结**：Bun 是一个集 **运行 + 打包 + 测试 + 包管理** 于一体的超级工具，速度极快。


## 二、Bun 的安装

### 1. 官方推荐安装（macOS / Linux）
```bash
curl -fsSL https://bun.sh/install | bash
````

安装完成后，重启终端或执行：

```bash
source ~/.bashrc  # 或 ~/.zshrc
```

### 2. Windows 安装

目前 Bun 对 Windows 原生支持还在开发中，推荐先用 **WSL（Windows Subsystem for Linux）**：

```bash
curl -fsSL https://bun.sh/install | bash
```


## 三、npm 安装方式

如果你已经有 Node.js + npm，可以直接用 npm 安装：

### 全局安装

```bash
npm install -g bun
```

验证：

```bash
bun --version
```


## 四、npx 临时使用方式

不想安装 Bun？可以用 **npx** 临时运行（每次会先下载 Bun）。

运行 TypeScript 文件：

```bash
npx bun run index.ts
```

运行 HTTP 服务：

```bash
npx bun run server.ts
```

**优缺点对比**：

| 安装方式        | 优点                   | 缺点           | 适合人群        |
| --------------- | ---------------------- | -------------- | --------------- |
| `curl` 脚本安装 | 官方推荐，最快最新版本 | 需要 bash 环境 | Mac/Linux 用户  |
| npm 全局安装    | 无需 bash，直接 npm    | 更新需重新安装 | Node.js 用户    |
| npx 临时使用    | 不污染全局，随用随走   | 每次运行需下载 | 想试用 Bun 的人 |


## 五、Bun 的主要作用与场景

1. **快速启动项目**
   不用装 npm/yarn，`bun init` 一键创建项目。

2. **快速安装依赖**
   `bun install` 比 `npm install` 快几倍到几十倍。

3. **直接运行 TS/JS 文件**
   无需额外编译。

4. **内置打包和测试工具**
   省去 webpack、jest 等配置。

5. **兼容 Node.js 大部分 API**
   大部分 npm 包直接可用。


## 六、Bun 基础使用教程

### 1. 创建新项目

```bash
mkdir my-bun-app
cd my-bun-app
bun init
```

会自动生成：

* `package.json`
* `tsconfig.json`（如果选择 TypeScript）
* 示例入口文件（`index.ts` / `index.js`）


### 2. 安装依赖

```bash
bun install react react-dom
```


### 3. 运行 JavaScript / TypeScript

`index.ts`：

```ts
export function greet(name: string) {
  return `你好, ${name}!`;
}

console.log(greet("小白"));
```

运行：

```bash
bun run index.ts
```

---

### 4. 启动 HTTP 服务

```ts
// server.ts
Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Hello Bun!");
  },
});
console.log("服务器已启动：http://localhost:3000");
```

运行：

```bash
bun run server.ts
```

浏览器访问 `http://localhost:3000`

---

### 5. 作为包管理器使用

```bash
bun install axios
bun remove axios
bun add lodash
```

---

### 6. 运行测试

```ts
// sum.test.ts
import { expect, test } from "bun:test";

function sum(a: number, b: number) {
  return a + b;
}

test("sum adds two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
```

运行：

```bash
bun test
```

---

## 七、Bun 的优缺点

**优点：**

* 性能极快（安装依赖、运行 TS 都很快）
* 内置常用功能（打包、测试、HTTP 服务、包管理）
* 兼容 Node.js 大部分 API

**缺点：**

* 生态比 Node.js 小（但在快速增长中）
* 部分 Node.js API 还不完全支持
* Windows 原生支持还在完善中

---

## 八、小白入门总结

如果你刚入门前端/全栈：

1. **写后端接口**：`Bun.serve()`
2. **跑 TypeScript**：`bun run xxx.ts`
3. **装包**：`bun install 包名`
4. **跑测试**：`bun test`

**一句话**：Bun 能替代 Node.js + npm/yarn + webpack + jest 的一大部分功能，而且速度非常快，非常适合学习和开发。

---
