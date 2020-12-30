import ToDoList from "../ToDoList";
import {action} from "@storybook/addon-actions";

const todos = [
    {
        completed: true,
        text: 'string',
        id: Math.random() * 1000,
    },
    {
        completed: false,
        text: 'string',
        id: Math.random() * 1000,
    },
]

const handleClick = action('click');

export default {
    title: 'My Component/TodoList',
    component: ToDoList
}
const Template = (args) => (
    <ToDoList {...args}/>
);

export const TodoStories = Template.bind({});
TodoStories.args = {
    filterTodo: todos,
    setToDos: handleClick,
    toDo: todos[0]
};
