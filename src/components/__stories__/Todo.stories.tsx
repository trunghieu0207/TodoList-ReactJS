import Todo, {TodoProps} from "../Todo";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react/types-6-0";

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
    title: 'My Component/Todo',
    component: Todo
}

const Template: Story<TodoProps> = (args) => (
    <Todo {...args}/>
)

export const TodoStories = Template.bind({});
TodoStories.args = {
    toDos: todos,
    setTodo: handleClick,
    toDo: todos[0]
};