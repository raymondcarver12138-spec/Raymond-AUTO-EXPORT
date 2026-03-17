<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/ee0f9985-b842-45e1-a8bb-49014b6ef46e

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
   `npm run dev`

## 專案設定紀錄 (Setup Log)

1. **package.json**: 更新專案名稱為 `mova-auto-export`。
2. **GitHub Actions 部署**: 加入 `.github/workflows/deploy.yml`，在推播到 `main` 分支時會自動透過 GitHub Pages 部署上線。
3. **.gitignore**: 已更新完整的 Node.js 與 React 忽略清單，防止上傳 `node_modules`、暫存檔與隱私檔案 (`.env` 等)。
