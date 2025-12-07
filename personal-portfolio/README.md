**吳宇涵 — 個人作品集 (Personal Portfolio)**

此儲存庫包含個人單頁作品集的原始檔案，主要用於展示個人資訊、技能、經歷與專案作品。

快速預覽
- 在本機啟動簡易伺服器並開啟瀏覽器：
```powershell
cd 'c:\Users\admin\Desktop\1\profile\personal-portfolio'
python -m http.server 8000; Start-Process 'http://localhost:8000'
```
然後在瀏覽器開啟 `http://localhost:8000`。

專案內容重點
- `index.html`：單頁網站主檔案（含 hero、技能、時間軸、專案、聯絡）。
- `css/styles.css`：樣式與響應式規則（含 progress bar、卡片動畫、圖片顯示設定）。
- `js/main.js`：簡單互動（smooth scroll、IntersectionObserver 效果、回到頁首按鈕）。
- `assets/avatar/profile.jpg`：個人頭像。
- `assets/screenshots/`：專案截圖（`project1.jpg`、`project2.jpg`、`project3.jpg`）。

已完成功能
- 響應式設計，支援手機（<600px）與平板／桌面。
- 平滑錨點滾動與簡易進場動畫。
- 技能進度條（使用 `data-percentage` 動態顯示）。
- 專案圖片已下載並儲存在 `assets/screenshots/`，且已調整 CSS 以完整顯示（避免重要內容被裁切）。

如何修改與上傳新圖片
- 把圖片命名為 `project1.jpg`、`project2.jpg`、`project3.jpg` 放到 `assets/screenshots/`，然後 commit 並 push。

部署（選填）
- 若要使用 GitHub Pages：在儲存庫設定 (Settings) 選擇 Pages，將來源設為 `main` 分支的 `/ (root)`，並開啟即可。網站會在幾分鐘內發佈。

聯絡資訊
- 名稱：吳宇涵
- Email：`hannie9631@gmail.com`
- GitHub：`https://github.com/414571037`

授權
- 本專案使用 MIT License（參見 `LICENSE`）。

如果你要我幫你：
- 將 README 再補上截圖、部署範例或更完整的專案說明（我可以把 `assets/screenshots/` 的圖片也加入 README 的展示）。

最後更新：自動同步本機專案內容到此 README。
# Personal Portfolio

This repository contains the source code for a personal portfolio website. The website showcases personal information, skills, work experience, and projects.

## Project Structure

```
personal-portfolio
├── index.html          # Main entry point for the portfolio website
├── css
│   └── styles.css     # Styles for the portfolio website
├── js
│   └── main.js        # JavaScript functionality for interactivity
├── assets
│   ├── avatar         # Directory for profile picture or avatar image
│   ├── screenshots     # Directory for project screenshots
│   └── icons          # Directory for icon images
├── data
│   └── projects.json   # JSON file storing project data
├── .gitignore         # Specifies files to be ignored by Git
├── LICENSE            # Licensing information for the project
├── README.md          # Documentation for the project
└── package.json       # npm configuration file
```

## Features

- **Responsive Design**: The website is designed to be mobile-friendly and adjusts to different screen sizes.
- **Smooth Scrolling**: Navigation links smoothly scroll to the corresponding sections of the page.
- **Interactive Elements**: Includes hover effects and animations for a better user experience.

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/personal-portfolio.git
   ```
2. Navigate to the project directory:
   ```
   cd personal-portfolio
   ```
3. Open `index.html` in your web browser to view the portfolio.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.