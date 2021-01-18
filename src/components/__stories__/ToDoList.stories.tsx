import ToDoList, {ToDoListProps} from "../ToDoList";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react/types-6-0";
import {TodoInterface} from "../../App";

interface ToDoListPropsStory extends ToDoListProps {
    toDo?: TodoInterface;
}

const todos: TodoInterface[] = [
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
    title: 'My Component/Todo List',
    component: ToDoList
}
const Template: Story<ToDoListPropsStory> = (args) => (
    <ToDoList {...args}/>
);

export const TodoListStories = Template.bind({});
TodoListStories.args = {
    filterTodo: todos,
    setToDos: handleClick,
    toDo: todos[0],
    toDos: todos
};
