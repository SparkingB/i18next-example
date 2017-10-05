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
  .use(XHR)
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
* XHR 會讀取在 public 網域下的 json 檔案，是必須的

## References
* [i18next](https://www.i18next.com/#) 官方文件
* [react-i18next](https://react.i18next.com/) 官方文件
* [i18next plugins](https://www.i18next.com/plugins-and-utils.html#plugins): i18n 插件系統
* [i18next options](https://www.i18next.com/configuration-options.html): configuration option 設定文件