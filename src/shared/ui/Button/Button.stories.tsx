import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary',
    theme: ThemeButton.OUTLINE
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];


export const Clear = Template.bind({});
Clear.args = {
    children: 'Clear',
    theme: ThemeButton.CLEAR
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Outline',
    theme: ThemeButton.OUTLINE
};
Outline.decorators = [ThemeDecorator(Theme.DARK)];
