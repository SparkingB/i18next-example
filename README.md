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
* XHR 會讀取在 public 網域下的 json 檔案，另外發一個 http request, 是必須的
  * 使用 i18next.init 中的 [resources](https://www.i18next.com/configuration-options.html) 可以直接讀取指定檔案, 或是使用 [addResourceBundle](https://www.i18next.com/api.html#resource-handling)

## Name Space

NS 可以在 .init 中宣告, 也可以在組件中指定。

在 `i18n.js` 中 做全域設定，多個 name space 表示可以拆開多個檔案

```js
i18n.init({
  ns: ['common', 'main'],
  defaultNS: 'main',
});

```

在組件中使用 ns:xxx 去指定 namespace, 例如：

```jsx
import { I18n } from 'react-i18next';
//...
render() {
  return (
    <I18n>
      <h1>{t('common:your-key-in-common-json')}</h1>
      <h2>{t('another-key-with-default-main')}</h2>
    </I18n>
  )
}

```
沒指定表示使用 *defaultNS* 作為預設 Name space. 如果該區域都是用同樣的 ns 但是都不是預設，不需要每個都 `common:`, 只要在 `I18n` 組件中的 props 指定：

```jsx
  <I18n ns="common">
    <h1>{t('your-key-in-common-json')}</h1>
    <h2>{t('main:another-key-in-main')}</h2>
  </I18n>
```

注意，原本的 main (預設 ns) 在指定 ns="common"情況下就必須手動 `main:` 指定了。

## References
* [i18next](https://www.i18next.com/#) 官方文件
* [react-i18next](https://react.i18next.com/) 官方文件
* [i18next plugins](https://www.i18next.com/plugins-and-utils.html#plugins): i18n 插件系統
* [i18next options](https://www.i18next.com/configuration-options.html): configuration option 設定文件