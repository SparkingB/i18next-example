import i18n from 'i18next';
import LangDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import { reactI18nextModule } from 'react-i18next';

/**
 * 想要取得 i18next 的 context, 使用下列兩種方式：
 * 1. i18n.use(reactI18nextModle) 讀取插件
 * 2. I18nextProvider
 */

i18n
  .use(LangDetector)
  .use(XHR)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en', // 選擇預設語系
    debug: true,
    interpolation: {
      escapeValue: false, // 跳脫字元預防 XXS 攻擊，預設打開，然後在 React 中不需要
    },
    react: {
      wait: true,
    },
  });

export default i18n;
