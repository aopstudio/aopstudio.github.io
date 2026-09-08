#!/usr/bin/env bash
set -euo pipefail

required_files=(
  "index.html"
  "404.html"
  "assets/site.css"
  "assets/tailwind.css"
  "assets/site-data.js"
  "assets/site.js"
  "assets/images/wechat-public-account-qr.jpg"
  "assets/images/github-favicon.ico"
  "assets/images/blog-icon.jpg"
  "assets/images/bilibili-favicon.ico"
  "README.md"
  "robots.txt"
  "package.json"
)

for file in "${required_files[@]}"; do
  [[ -f "$file" ]] || { echo "Missing required file: $file"; exit 1; }
done


rg -q --fixed-strings 'GitHub Pages' README.md || { echo 'README is missing GitHub Pages deployment guidance'; exit 1; }
rg -q --fixed-strings '单页个人主页' README.md || { echo 'README is missing single-homepage description'; exit 1; }

for required_text in \
  '正在做' \
  '经历' \
  '项目' \
  '论文与研究' \
  '最新输出' \
  'https://github.com/aopstudio' \
  'https://github.com/infiniflow/ragflow' \
  'https://neusoftware.top' \
  'https://space.bilibili.com/14938115' \
  '程艺的编程之路' \
  '曾作为 RagFlow 项目组成员' \
  'Dify 插件开发' \
  '2025' \
  '2024'; do
  rg -q --fixed-strings "$required_text" index.html assets/site-data.js || {
    echo "Missing curated content: $required_text"; exit 1;
  }
done

if rg -q --fixed-strings 'Music Offering Guide' assets/site-data.js; then
  echo 'Removed project should not remain in project data'; exit 1;
fi

rg -q --fixed-strings 'id="experience-list"' index.html || { echo 'Homepage is missing experience render target'; exit 1; }
rg -q --fixed-strings 'id="wechat-qr"' index.html || { echo 'Homepage is missing WeChat QR section'; exit 1; }
rg -q --fixed-strings 'id="language-toggle"' index.html || { echo 'Homepage is missing language toggle'; exit 1; }
rg -q --fixed-strings "export const content" assets/site-data.js || { echo 'Localized content export is missing'; exit 1; }
rg -q --fixed-strings "en:" assets/site-data.js || { echo 'English content is missing'; exit 1; }
rg -q --fixed-strings "URLSearchParams" assets/site.js || { echo 'URL-based locale selection is missing'; exit 1; }

for css_requirement in \
  '@theme' \
  '@layer base' \
  '--color-portfolio-accent' \
  ':focus-visible' \
  '--font-sans'; do
  rg -q --fixed-strings -- "$css_requirement" assets/tailwind.css || {
    echo "Missing CSS accessibility or responsiveness rule: $css_requirement"; exit 1;
  }
done

rg -q --fixed-strings 'lg:w-[260px]' index.html || { echo 'Homepage is missing Tailwind rail width utility'; exit 1; }
rg -q --fixed-strings 'sm:px-10' index.html || { echo 'Homepage is missing Tailwind responsive utility'; exit 1; }
if rg -q --fixed-strings -- '--rail-width' assets/tailwind.css; then
  echo 'Legacy rail CSS token should not remain in Tailwind source'; exit 1;
fi

echo "Smoke checks passed"
