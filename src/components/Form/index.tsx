import Reac, { useState} from 'react';
import { Itask } from '../../types/Itask';
import Button from '../Button';
import style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<Itask[]>>;
}


export default function Form({setTasks} : Props) {

  const [name, setName] = useState<string>("");
  const [time, setTime] = useState<string>("00:00")

  function addTask(event: React.FormEvent) {
    event.preventDefault(); 
    setTasks(oldTasks => {
      return [...oldTasks, {
        name,
        time,
        selected: false,
        completed: false,
        id: uuidv4()
      }];    
    })
    resetState();
  }

  function resetState() {
    setName("");
    setTime("00:00");
  }

  return (
    <form action="" className={style.newTask} onSubmit={addTask}>
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
