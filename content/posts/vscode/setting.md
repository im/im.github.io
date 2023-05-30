---
title: vscode 所有配置对照表
date: "2023-05-29"
tags: ['vscode']
categories:
  - 技术教程
---

```json
{
    // 在保存时自动格式化代码
    "editor.formatOnSave": true,
    // 在按下“Commit”字符(如"."或";")时接受建议
    "editor.acceptSuggestionOnCommitCharacter": true,
    // 在按下“Enter”时接受建议
    "editor.acceptSuggestionOnEnter": "on",
    // 自动启用辅助功能
    "editor.accessibilitySupport": "auto",
    // 启用背景颜色样式，在编辑器中显示错误和警告等
    "editor.colorDecorators": true,
    // 光标闪烁类型("blink"、"smooth" 或 "phase")
    "editor.cursorBlinking": "blink",
    // 开启平滑光标动画
    "editor.cursorSmoothCaretAnimation": false,
    // 光标样式("block", "line" 或 "underline")
    "editor.cursorStyle": "line",
    // 高亮当前行周围的行数(Highlight current line plus n lines)
    "editor.cursorSurroundingLines": 3,
    // 光标宽度，0 表示使用默认值
    "editor.cursorWidth": 0,
    // 禁用字形图层提示
    "editor.disableLayerHinting": true,
    // 禁用等宽字体的优化
    "editor.disableMonospaceOptimizations": false,
    // 启用拖放支持
    "editor.dragAndDrop": true,
    // 在空文本中复制时复制当前行或上次选区内容
    "editor.emptySelectionClipboard": true,
    // 额外的编辑器类名
    "editor.extraEditorClassName": "",
    // 编辑器字体
    "editor.fontFamily": "'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback'",
    // 启用字体连字
    "editor.fontLigatures": false,
    // 编辑器字体大小
    "editor.fontSize": 14,
    // 编辑器字体重量
    "editor.fontWeight": "",
    // 粘贴时自动格式化代码
    "editor.formatOnPaste": false,
    // 显示标尺栏
    "editor.glyphMargin": true,
    // 在悬停编辑器概述标尺时隐藏光标
    "editor.hideCursorInOverviewRuler": false,
    // 在敲击代码时显示内联建议
    "editor.inlineSuggest.enabled": true,
    // 启用内部可访问支持
    "editor.internalAccessibilitySupport": "auto",
    // 启用大文件的优化
    "editor.largeFileOptimizations": true,
    // 高亮匹配的括号
    "editor.matchBrackets": true,
    // 启用小地图
    "editor.minimap.enabled": false,
    // 显示的小地图的最大列数
    "editor.minimap.maxColumn": 120,
    // 渲染小地图中的字符
    "editor.minimap.renderCharacters": true,
    // 小地图与实际大小的比例
    "editor.minimap.scale": 1,
    // 小地图右侧的滑块何时显示("mouseover"、"always" 或 "never")
    "editor.minimap.showSlider": "mouseover",
    // 小地图在哪个侧边栏显示("left" 或 "right")
    "editor.minimap.side": "right",
    // 启用鼠标滚轮缩放
    "editor.mouseWheelZoom": false,
    // 多光标时将影响重叠的光标合并到单个光标中
    "editor.multiCursorMergeOverlapping": true,
    // 启用多光标选择的修改键, 可选值包括 "ctrlCmd"、 "alt"、"shift" 和 "meta"
    "editor.multiCursorModifier": "alt",
    // 鼠标移到函数名称上时是否显示参数提示
    "editor.parameterHints": true,
    // 在敲击代码时显示语言支持的快速建议
    "editor.quickSuggestions": true,
    // 快速建议的延迟时间（毫秒）
    "editor.quickSuggestionsDelay": 10,
    // 是否只读，禁止编辑
    "editor.readOnly": false,
    // 渲染控制字符(CR/LF/Tab) 的显示方式
    "editor.renderControlCharacters": false,
    // 渲染最后一个仅包含换行符的行
    "editor.renderFinalNewline": true,
    // 渲染缩进参考线
    "editor.renderIndentGuides": true,
    // 当前行高亮的样式("line", "gutter" 或者 "none")
    "editor.renderLineHighlight": "line",
    // 控制空格和 Tab 的呈现方式
    "editor.renderWhitespace": "none",
    // 滚动时突出光标
    "editor.revealCursorOnScroll": true,
    // 启用默认的 Windows 平台的前向选择样式
    "editor.roundedSelection": true,
    // 设置标尺的位置
    "editor.rulers": [],
    // 允许在行的末尾进行额外的滚动，将光标保持在最后一列之后
    "editor.scrollBeyondLastColumn": 5,
    // 允许在行的末尾进行额外的滚动，将光标保持在最后一行之后
    "editor.scrollBeyondLastLine": true,
    // 允许在编辑器之间复制和粘贴选择
    "editor.selectionClipboard": true,
    // 启用匹配选择项
    "editor.selectionHighlight": true,
    // 显示废弃的语法提示
    "editor.showDeprecated": true,
    // 前导行代码折叠控制的显示方式("mouseover"、"always" 或 "none")
    "editor.showFoldingControls": "mouseover",
    // 高亮缩进，淡化其他内容
    "editor.showIndentGuides": true,
    // 是否显示行号
    "editor.showLineNumbers": true,
    // 当前行之前滚动的行数(仅在scrollbarHover才有用)
    "editor.showPreviousLine": true,
    // 显示未使用的代码
    "editor.showUnused": true,
    // 启用代码片段建议
    "editor.snippetSuggestions": "top",
    // 在触发字符后自动显示建议
    "editor.suggestOnTriggerCharacters": true,
    // 控制如何预先选择建议
    "editor.suggestSelection": "recentlyUsed",
    // 控制如何使用 Tab 键来接受建议
    "editor.tabCompletion": "on",
    // 缩进宽度
    "editor.tabSize": 4,
    // 在保存时将自动删除行末的空白
    "editor.trimAutoWhitespace": true,
    // 智能选词分隔符
    "editor.wordSeparators": "~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?",
    // 控制自动换行("off", "on" 或 "wordWrapColumn")
    "editor.wordWrap": "off",
    // 定义哪些字符可能会成为单独一行的断点
    "editor.wordWrapBreakAfterCharacters": "\t})]?|&,;",
    // 定义哪些字符可能会成为单独一行
    "editor.wordWrapBreakBeforeCharacters": "{([+",
    // 定义哪些字符可能会成为单独一行的断点之前以及之后("wordWrapBreakAfterCharacters"和"wordWrapBreakBeforeCharacters"的结合使用)
    "editor.wordWrapBreakObtrusiveCharacters": ".",
    // 在wordWrap:"wordWrapColumn"模式下控制编辑器的自动换行
    "editor.wordWrapColumn": 80,
    // 在 minified 文件中启用自动换行
    "editor.wordWrapMinified": true,
    // 在多行的第二行和之后缩进相对于第一行
    "editor.wrappingIndent": "same",
    // 是否在首选项中启用折叠区域代码折叠
    "editor.folding": true,
    // 在预览(鼠标悬停)中显示文档
    "editor.hover.enabled": true,
    // 在鼠标悬停时就显示预览信息，而不是等待300ms
    "editor.hover.delay": 300,
    // 键入时在符号或标签加亮
    "editor.occurrencesHighlight": true,
    // 在重命名符号时更新所有引用
    "editor.renameOnType": false,
    // 修改字体时放大或缩小编辑器
    "editor.mouseWheelZoomDelta": 2,
    // 滚动鼠标的灵敏度
    "editor.mouseWheelScrollSensitivity": 1,
    // 平滑滚动
    "editor.mouseWheelSmoothScroll": false,
    // 显示诊断消息(错误、警告等)
    "editor.showDiagnostics": "warnings",
    // 显示代码折叠控件
    "editor.showFoldingControlsAlways": true,
    // 高亮匹配括号的间距(以像素为单位)
    "editor.matchBracketsSpace": 0,
    // 控制当在一个断点处输入或删除字符时如何保持缩进
    "editor.autoIndent": "advanced",
    // 描述按下 Tab 键时应插入的空白
    "editor.useTabStops": true,
    // 保留换行符类型
    "files.insertFinalNewline": true,
    // 在使用 tab 时，插入 N 个空格
    "editor.tabSize": 4,
    // 开启 Emmet 功能
    "emmet.triggerExpansionOnTab": true,
    // 启用 emmet 的 auto-preview模式
    "emmet.showAbbreviationSuggestions": true,
    // 在 HTML 中，为开始和结束标记自动插入一个新行
    "emmet.html.format.indentation": "    ",
    // 在标记之间插入空格
    "emmet.syntaxProfiles": {
        "javascript": {
            "attr_quotes": "single"
        }
    }
}
```

