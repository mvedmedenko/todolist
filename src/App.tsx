import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    const title: string = "What to learn";

    const [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/ES6/TS", isDone: true},
        {id: 3, title: "REACT", isDone: false}
    ])

    const [filter, setFilter] = useState<FilterValuesType>("all")

    const [value, setValue] = useState<string>("")

    const removeItem = (id: number) => {
        const newArr = tasks.filter((i) => i.id !== id)
        setTasks(newArr)
    }

    const changeFilter = (value: FilterValuesType) => setFilter(value)

    const changeValue = (value: string) => {
        setValue(value)
    }

    const addTask = (value: string) => {

    }

    const getFilteredTasks = (tasks: TaskType[], filter: FilterValuesType) => {
        switch (filter) {
            case "active": {
                return tasks.filter(t => !t.isDone)
            }

            case "completed": {
                return tasks.filter(t => t.isDone)
            }

            default:
                return tasks
        }
    }

    const filteredTasks = getFilteredTasks(tasks, filter)
    console.log(value)

    return (
        <div className="App">
            <TodoList value={value} changeValue={changeValue} changeFilter={changeFilter} removeItem={removeItem} title={title} tasks={filteredTasks}/>
        </div>
    );
}

export default App;