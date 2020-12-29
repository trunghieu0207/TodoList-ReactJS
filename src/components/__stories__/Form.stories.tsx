import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';

import Form from '../Form';
import {action} from "@storybook/addon-actions";

const todos = {
    completed: true,
    text: 'string',
    id: Math.random() * 1000,
}

// This default export determines where your story goes in the story list
const handleClick = action('click');

export default {
    title: 'My Component/Form',
    component: Form,
};

const Template: Story<ComponentProps<typeof Form>> = (args) => (
    <Form {...args} />
);

export const FormAndSelect = Template.bind({});
FormAndSelect.args = {
    setInputText: handleClick,
    setToDos: handleClick,
    setStatus: handleClick,
    toDos: todos,
    inputText: 'string'
};