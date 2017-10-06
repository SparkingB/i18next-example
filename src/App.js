import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * 取得 react-i18next context
 */
import { I18n, Interpolate } from 'react-i18next';

class App extends Component {
  render() {
    return (
      <I18n>
      {(t, { i18n }) => (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">
              {t('title')}
            </h1>
            <div className="btn-group">
              <span>{t('common:switcher')}</span>
              <button onClick={() => i18n.changeLanguage('en')}>EN</button>
              <button onClick={() => i18n.changeLanguage('zh-tw')}>zh-TW</button>
              <button onClick={() => i18n.changeLanguage('zh-cn')}>zh-CN</button>
            </div>
          </header>
          <p className="App-intro">
            <Interpolate
              i18nKey="link"
              f={<a href="https://www.i18next.com/formatting.html#">formatting</a>}
              i={<a href="https://react.i18next.com/components/interpolate.html#">Interpolate</a>}
            />
          </p>
          <p>{t('subTitle')}</p>
        </div>
      )}
      </I18n>
    );
  }
}

export default App;
