import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    to: '/',
    theme: AppLinkTheme.PRIMARY,
    children: 'text',
};

export const Secondary = Template.bind({});
Secondary.args = {
    to: '/',
    theme: AppLinkTheme.SECONDARY,
    children: 'text',
};


