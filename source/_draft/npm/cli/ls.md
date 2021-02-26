---
title: ls
---

# ls

::: tip
显示已安装的软件包
:::

## 概要

```bash
npm ls [[<@scope>/]<pkg> ...]

aliases: list, la, ll
```

## 详情

-   此命令将以树状结构将已安装的软件包的所有版本及其依赖项打印到标准输出。

-   位置参数是 name@version-range 标识符，它将结果限制为仅指定包的路径。
    请注意，嵌套软件包还将显示指定软件包的路径。
    例如，在 npm 的源代码树中运行`npm ls vue`将显示：

```
├── vue@2.6.10
└─┬ vuepress@1.1.0
  └─┬ @vuepress/core@1.1.0
    └── vue@2.6.10  deduped
```

-   它将打印出多余，丢失和无效的软件包。

-   如果项目为依赖项指定了`git url`，则这些名称将显示在`name@version`后面的括号中，以使用户更容易识别项目的潜在分支

-   显示的树是逻辑依赖树，基于包依赖关系，而不是 node_modules 文件夹的物理布局。

-   当以 ll 或 la 身份运行时，默认情况下会显示扩展信息。

## 配置

-   **json**

*   `Default: false`
*   `Type: Boolean`

以 json 格式显示信息。

```bash
npm ls vue --json
{
  "name": "npm-link-example",
  "version": "1.0.0",
  "dependencies": {
    "vue": {
      "version": "2.6.10",
      "from": "vue",
      "resolved": "https://registry.npmjs.org/vue/-/vue-2.6.10.tgz"
    }
  }
}
```

-   **long**

*   `Default: false`
*   `Type: Boolean`

显示扩展信息

```bash
npm ls vue --long
vue@2.6.10
    Reactive, component-oriented view layer for modern web interfaces.
    git+https://github.com/vuejs/vue.git
    https://github.com/vuejs/vue#readme
```

-   **parseable**

*   `Default: false`
*   `Type: Boolean`

显示可分析的输出而不是树视图。

```bash
npm ls vue --parseable
/Users/xiaomi/Desktop/workbench/npm-link-example/node_modules/vue
```

-   **global**

*   `Default: false`
*   `Type: Boolean`

输出全局软件包列表


-   **depth**

*   `Type: Int`

依赖关系树的最大显示深度。


-   **prod / production**

*   `Default: false`
*   `Type: Boolean`

显示dependencies程序包的依赖关系树


-   **dev / development**

*   `Default: false`
*   `Type: Boolean`

显示 devDependencies 程序包的依赖关系树

-   **link**

*   `Default: false`
*   `Type: Boolean`

显示link的依赖项

