# 岑哲栋的双路径个人作品集

这是一个使用 Tailwind CSS 构建的静态单页个人主页，工作经历、项目、论文与公开输出在同一页面呈现。内容集中在 `assets/site-data.js`，Tailwind 源样式在 `assets/tailwind.css`，生成后的页面样式为 `assets/site.css`。

## 页面

- `/`：个人主页，汇总正在做的事、工作经历、项目、论文与公开输出。
- `/engineering/` 和 `/research/`：旧链接的迁移页。

## 本地预览

```bash
npm install
npm run build:css
bash tests/smoke.sh
python3 -m http.server 4173 --directory .
```

访问 `http://localhost:4173/`，并检查 `/engineering/` 与 `/research/` 的迁移链接。停止服务器请按 `Ctrl-C`。

## 发布到 GitHub Pages

1. 在 GitHub 创建一个新的空仓库，例如 `personal-portfolio`。不要勾选自动创建 README，以免和本地历史冲突。
2. 在本项目根目录添加远程并推送已审阅的分支：

   ```bash
   git remote add origin git@github.com:YOUR_ACCOUNT/personal-portfolio.git
   git push -u origin main
   ```

3. 打开 GitHub 仓库的 **Settings → Pages**，将 Source 设为 **Deploy from a branch**，选择 `main` 分支和 `/(root)` 文件夹，然后保存。
4. 等待 GitHub 完成部署；Pages 设置页会给出公开地址。

本项目不会自行创建远程仓库、推送或开启 Pages；这些步骤需要由仓库所有者确认后执行。

## 更新内容

- 新项目、经历、论文、文章和外链：修改 `assets/site-data.js`。
- 文案结构：修改对应的 `index.html`、`engineering/index.html` 或 `research/index.html`。
- 视觉与响应式规则：修改 `assets/tailwind.css`，然后运行 `npm run build:css`。不要直接修改生成的 `assets/site.css`。

## 公开信息边界

公开站点只应保留可公开描述的工作职责、公开论文、公开仓库和自主输出。不要添加公司代码、客户资料、内部数据库结构、未公开指标、私密联系方式或未获授权的图片。当前域名 `neusoftware.top` 已作为博客链接保留；只有在你明确决定迁移博客或 DNS 后，才应将它配置为此站点的自定义域名。
