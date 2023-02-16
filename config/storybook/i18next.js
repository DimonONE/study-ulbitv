import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const ns = ['translation'];
const supportedLngs = ['en'];
const resources = ns.reduce((acc, n) => {
    supportedLngs.forEach((lng) => {
        if (!acc[lng]) acc[lng] = {};
        acc[lng] = {
            ...acc[lng],
            [n]: require(`../../public/locales/${lng}/${n}.json`),
        };
    });
    return acc;
}, {});

console.log('resources', resources);
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // debug: true,
        lng: 'en',
        fallbackLng: 'en',
        defaultNS: 'translation',
        ns,
        interpolation: {escapeValue: false},
        react: {useSuspense: false},
        supportedLngs,
        resources
    });

export default i18n;
