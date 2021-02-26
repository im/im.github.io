---
title: github actions 生成两套 hexo 主题
tags:
    - github
    - github action
    - hexo
categories:
    - other
thumbnail: https://i.loli.net/2020/05/30/LUl1uxTbMkp2jJV.jpg
---

如果你的博客需要两套皮肤的话，又不想添加其他多余的代码，就可以是用`github actions` 执行两次  `hexo g`  构建不同的主题

<!--more-->

我这里使用的的 [icarus](https://github.com/ppoffice/hexo-theme-icarus) , 如果你还不知道 `github actions` 是什么，请到这里 [GitHub Actions 入门教程](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

部署脚本如下：

```bash
name: deploy github pages
on:
  push:
    branches:
      - master
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: 1. Checkout
        uses: actions/checkout@master

      - name: 2. setup nodejs...

        uses: actions/setup-node@v1

      - name: 3. install hexo..
        run: |
          npm install hexo-cli -g
          npm install

      - name: 4. install theme...
        run: |
          git submodule init
          git submodule update
          cd themes/icarus
          npm install
          cd ../../
          cp ./theme_config/_config.theme.yml themes/icarus/_config.yml
          ([[ -e ./theme_config/_config.page.yml ]] && cp ./theme_config/_config.page.yml themes/icarus/) || true
          ([[ -e ./theme_config/_config.post.yml ]] && cp ./theme_config/_config.post.yml themes/icarus/) || true
      - name: 5. deploy...
        run: |
          hexo clean
          hexo g

          mkdir output
          cp -r public/* output
      - name: 6. setting dark theme...
        run: |
          cp ./theme_config/_config.theme.dark.yml themes/icarus/_config.yml
          cp ./theme_config/_config.dark.yml _config.yml
      - name: 7. deploy dark theme...
        run: |
          hexo clean
          hexo g
          cp -r dark output
      - name: deploy github pages
        uses: JamesIves/github-pages-deploy-action@master
        env:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          BRANCH: gh-pages
          FOLDER: output
```



这里根据不同的配置创建了不同的主题，如果有问题可以参照一下我这个仓库 [blog](https://github.com/im/blog)