import { addDecorator } from '@storybook/react';

import {StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator.tsx';
import {ThemeDecorator} from '../../src/shared/config/storybook/ThemeDecorator.tsx';
import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator.tsx';
import {Theme} from '../../src/app/providers/ThemeProvider';
import i18n from './i18next.js';

export const parameters = {
    i18n,
    locale: 'en',
    locales: {
        en: 'English',
        uk: 'Ukraine',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};



addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));