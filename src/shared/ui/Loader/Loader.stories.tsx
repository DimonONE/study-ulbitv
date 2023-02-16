import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loader, ThemeLoader } from './Loader';

export default {
    title: 'shared/Loader',
    component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Light = Template.bind({});
Light.args = {
    theme: ThemeLoader.LIGHT
};

export const Dark = Template.bind({});
Dark.args = {
    theme: ThemeLoader.DARK
};


