# 短網址產生器 URL-shortener

桌上型電腦或平板手機於網站內直接貼上網址即可進行縮網址服務。
![image](https://github.com/artbre0612/urlShortener/screenshot/screenshot1.png)
![image](https://github.com/artbre0612/urlShortener/screenshot/screenshot2.png)
## Installation
1. 開啟終端機 (Terminal)，cd 至存放本專案的資料夾，執行以下指令將本專案 clone 至本機電腦。
```bash
git clone https://github.com/artbre0612/urlShortener.git
```
2. 執行以下兩道指令安裝套件
```bash
npm install
npm install -g nodemon
```
3. 執行下列指令來啟動伺服器
```bash
npm run dev
```
當Terminal出現以下字樣，即代表伺服器啟動成功：
Express server is running on http://localhost:3000
現在，您可開啟任一瀏覽器輸入 http://localhost:3000 來使用縮網址服務。
## 開發工具

- server工具包: [Express](https://expressjs.com/)
- 樣板引擎: [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
- server自動重啟工具: [Nodemon](https://www.npmjs.com/package/nodemon)
