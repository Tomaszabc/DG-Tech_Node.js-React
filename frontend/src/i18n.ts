import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import pl from './locales/pl/translation.json';

const params = new URLSearchParams(window.location.search);
const qlang = params.get('lang') || localStorage.getItem('lang') || 'pl';

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, pl: { translation: pl } },
  lng: qlang,
  fallbackLng: 'pl',
  interpolation: { escapeValue: false }
});

export default i18n;