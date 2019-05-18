召喚獸資料取自 [神魔之塔 繁中維基主頁](https://tos.fandom.com/zh/wiki/%E7%A5%9E%E9%AD%94%E4%B9%8B%E5%A1%94_%E7%B9%81%E4%B8%AD%E7%B6%AD%E5%9F%BA)

# 技能篩選器
依照 `屬性` `種族` `稀有度` `技能標籤` 尋找需要的召喚獸
也可使用 `關鍵字` 搜尋 召喚獸名稱、隊長技、主動技

## Crawler
Crawl by [webscraper](https://www.webscraper.io/) chrome plugin.<br>
Download `monsters`, `monster-images` csv data to `/dataProcess`

---

## Data Process
### `yarn csvtojson`
Transform data from `.csv` to `.json`
### `yarn data-combine`
Combine transformed `monsters`, `monster-images` json file
### `yarn local-data`
Run `yarn csvtojson`, `yarn data-combine` at the same time

---

## Development
### `yarn start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Production
### `yarn build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `firebase deploy`
Deploy the `build` folder to firebase.<br>
[TOS Monster Skills](https://tosmonsterskill.firebaseapp.com/)
