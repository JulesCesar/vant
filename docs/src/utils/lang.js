import Locale from '../../../packages/locale';
import zhCN from '../../../packages/locale/lang/zh-CN';
import enUS from '../../../packages/locale/lang/en-US';

const langMap = {
  'en-US': enUS,
  'zh-CN': zhCN
};

const titleMap = {
  'en-US': 'Vant - A Vue.js 2.0 Mobile UI at YouZan',
  'zh-CN': 'Vant - 有赞移动端 Vue 组件库'
};

const userLang = window.localStorage.getItem('VANT_LANGUAGE') || window.navigator.language || 'en-US';
let defaultLang = 'en-US';
if (userLang.indexOf('zh-') !== -1) {
  defaultLang = 'zh-CN';
}
setLang(defaultLang);

export function setLang(lang) {
  window.localStorage.setItem('VANT_LANGUAGE', lang);
  Locale.use(lang, langMap[lang]);
  document.title = titleMap[lang];
}
