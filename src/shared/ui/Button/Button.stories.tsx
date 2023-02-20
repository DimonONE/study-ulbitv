import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    children: 'Clear',
    theme: ButtonTheme.CLEAR
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'OutlineDark',
    theme: ButtonTheme.OUTLINE
};
OutlineDark.decorators = [ThemeDecorator(Theme.LIGHT)];

export const OutlineLIGHT = Template.bind({});
OutlineLIGHT.args = {
    children: 'OutlineLIGHT',
    theme: ButtonTheme.OUTLINE
};
OutlineLIGHT.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundThemeLIGHT = Template.bind({});
BackgroundThemeLIGHT.args = {
    children: 'BACKGROUND',
    theme: ButtonTheme.BACKGROUND
};
BackgroundThemeLIGHT.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundThemeDark = Template.bind({});
BackgroundThemeDark.args = {
    children: 'BACKGROUND',
    theme: ButtonTheme.BACKGROUND
};
BackgroundThemeDark.decorators = [ThemeDecorator(Theme.LIGHT)];

export const BackgroundInvertedThemeLIGHT = Template.bind({});
BackgroundInvertedThemeLIGHT.args = {
    children: 'BACKGROUND_INVERTED',
    theme: ButtonTheme.BACKGROUND_INVERTED
};
BackgroundInvertedThemeLIGHT.decorators = [ThemeDecorator(Theme.LIGHT)];

export const BackgroundInvertedThemeDark = Template.bind({});
BackgroundInvertedThemeDark.args = {
    children: 'BACKGROUND_INVERTED',
    theme: ButtonTheme.BACKGROUND_INVERTED
};
BackgroundInvertedThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareLIGHT = Template.bind({});
SquareLIGHT.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true
};
SquareLIGHT.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SquareDARK = Template.bind({});
SquareDARK.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true
};
SquareDARK.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareM = Template.bind({});
SquareM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M
};
SquareM.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
};
SquareL.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
};
SquareXL.decorators = [ThemeDecorator(Theme.LIGHT)];