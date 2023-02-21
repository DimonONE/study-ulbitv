import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalLIGHT = Template.bind({});
ModalLIGHT.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi repellendus dignissimos eligendi, doloremque repudiandae alias eius optio voluptate, omnis vel porro in distinctio enim, labore explicabo et! Inventore, vero minus.',
};
ModalLIGHT.decorators = [ThemeDecorator(Theme.LIGHT)];
