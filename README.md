# i18next with React

使用 `i18next` 結合 React. 用法非常多種，請 checkout 到以下 branch 看程式碼：

* [i18next-instances](https://github.com/xJkit/i18next-example/tree/i18next-instances)

## 基本觀念：

在 App 初始化中 `index.js` 讀取 `i18n.js`:

```javascript
import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

i18n
  .use(XHR) // 可以使用 XHR 或 resources
  .use(LanguageDetector)
  .use(reactI18nextModule) // if not using I18nextProvider
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    // react i18next special options (optional)
    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default'
    }
  });

export default i18n;
```

* `.use` 讀取插件，詳情請見下方插件系統連結。
* `.init` 初始化函數： i18n.init(**options**, callback), 詳見下方設定說明

## Load i18n resources

讀取翻譯的方式參考最後 references, 有以下解：

* `i18next-xhr-backend`
  * 掛 plugin 上去, 設定好 Name Space, 完成。
  * Pros & Cons:
    * 增加 HTTP Requests
* `i18next.init.resources`
  * 直接讀取本地物件
  * Pros & Cons:
    * 被 webpack 打包，會增加 bundle.js 檔案大小
    * 除非你使用 webpack loader 或 plugin 將檔案分離
    * 適合完全 Offline 環境下使用。

## References
* [i18next](https://www.i18next.com/#) 官方文件
* [react-i18next](https://react.i18next.com/) 官方文件
* [i18next plugins](https://www.i18next.com/plugins-and-utils.html#plugins): i18n 插件系統
* [i18next options](https://www.i18next.com/configuration-options.html): configuration option 設定文件
* [i18next load translations](https://www.i18next.com/add-or-load-translations.html)