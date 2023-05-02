import React, {FC} from 'react';
import {FilterValuesType} from "./App";

type TodoListPropsType = {
    title: string;
    tasks: TaskType[];
    removeItem: (id: number) => void;
    changeFilter: (filter: FilterValuesType) => void;
    changeValue: (value: string) => void;
    value: string
}

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}
const TodoList:FC<TodoListPropsType> = ({tasks, title, removeItem, changeFilter, changeValue, value}) => {

    const onChangeValue = (e: any) => {
        const value = e.target.value
        changeValue(value)

    }

    return (
        <div>
            <div>
                <h3>{title}</h3>
                <div>
                    <input onChange={onChangeValue} value={value}/>
                    <button>+</button>
                </div>
                <ul>
                    {tasks.map((i) => {
                        return <li key={i.id}>
                            <input type="checkbox" checked={i.isDone}/>
                            <span>{i.title}</span>
                            <button onClick={() => removeItem(i.id)}>x</button>
                        </li>
                    })}
                </ul>
                <div>
                    <button onClick={() => changeFilter("all")}>All</button>
                    <button onClick={() => changeFilter("active")}>Active</button>
                    <button onClick={() => changeFilter("completed")}>Completed</button>
                </div>
            </div>
        </div>
    );
};

export default TodoList;