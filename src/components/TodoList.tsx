import { useState } from 'react'
import React from 'react'
import Task from './Task'
import Done from './Done'


type TaskData = {
    id: number;
    name: string;
}

const TodoList = () => {

    const [curTask, setCurTask] = useState<string>('')
    const [tasks, setTasks] = useState<TaskData[]>([])
    const [dones, setDones] = useState<TaskData[]>([])


    const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setCurTask(ev.target.value)
    }
    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        /* check pressing enter key here */
        if (ev.key === 'Enter') {
            if (curTask === '')
                alert("Task cannot be empty!!!")
            else {
                addTask(curTask)
                ev.currentTarget.value = ''
                setCurTask('')
                resetInput();
            }
        }
    }
    const addTask = (taskName: string) => {
        //use date.getTime() to get unique numeric id (https://www.w3schools.com/jsref/jsref_gettime.asp)
        const newId = (new Date()).getTime()

        // create new task list (หากจะ set ค่าให้กับตัวแปรที่สร้างจาก useState จะต้องสร้างข้อมูลใหม่หมดเสมอ)
        // spread syntax [...array] (https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/)
        const newTasks = [...tasks, { id: newId, name: taskName }]

        setTasks(newTasks)
    }

    const Click = () => {
        if (curTask === '') {
            alert("task cannot be empty")
        }
        else {
            addTask(curTask)
            resetInput();
            
        }
    }
    const doneTask = (id: number, name: string) => {
        // create new task list (หากจะ set ค่าให้กับตัวแปรที่สร้างจาก useState จะต้องสร้างข้อมูลใหม่หมดเสมอ)
        const newTasks = tasks.filter(x => x.id !== id)
        const newTasks2 = [...dones, { id: id, name: name }]
        setDones(newTasks2)
        setTasks(newTasks)
    }
    const deleteTask = (id: number) => {
        // create new task list (หากจะ set ค่าให้กับตัวแปรที่สร้างจาก useState จะต้องสร้างข้อมูลใหม่หมดเสมอ)
        const newTasks = tasks.filter(x => x.id !== id)
        setTasks(newTasks)
    }
    const resetInput = () => {
        var temp = curTask;
        var inputField = document.querySelector('input');
        if (inputField != null) {
            inputField.value = "";
        }
        setCurTask("");
    }

    return (
        <div className='mx-auto max-w-4xl'>
            <div className='flex space-x-1'>
                <input className='border border-gray-400 w-full text-2xl'
                    onKeyDown={onKeyDownCallback} onChange={onChangeCallback}></input>
                <button className='border border-gray-400 w-8 font-bold' onClick={Click}>+</button>
            </div>
            <div className='flex flex-col-reverse'>
                {tasks.map(x => <Task id={x.id} name={x.name} doneFn={doneTask} deleteFn={deleteTask} />)}
            </div>
            <div className='flex flex-col-reverse'>
                {dones.map(x => <Done id={x.id} name={x.name} />)}
            </div>
        </div>
    )
}


export default TodoList