import { useState} from 'react';
import Button from '../Button';
import style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";
import { useTask } from '../../contexts/taskContext';
import React from 'react';


export default function Form() {

  const [name, setName] = useState<string>("");
  const [time, setTime] = useState<string>("00:00")

  const { addTask, tasks }  = useTask();

  function handleAddTask(event: React.FormEvent) {
    event.preventDefault(); 
    addTask({
      name,
      time,
      selected: false,
      completed: false,
      id: uuidv4()
    })    
    resetState();
  }

  function resetState() {
    setName("");
    setTime("00:00");
  }

  return (
    <form action="" className={style.newTask} onSubmit={handleAddTask}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Add a new task</label>
          <input 
            value={name}
            onChange={event => setName(event.target.value)}
            type="text" 
            name="task"
            id="task"
            placeholder="What do you want to do?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">Time</label>
            <input 
              value={time}
              onChange={event => setTime(event.target.value)}
              type="time" 
              step="1"
              name="time"
              id="time"
              min="00:00:00"              
              max="01:30:00"
              required
            />
        </div>
        <Button type="submit">
          Add
        </Button>
      </form>
  )
}
