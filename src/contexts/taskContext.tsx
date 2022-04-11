
import React, { useState } from 'react';
import { Itask } from '../types/Itask';


type TaskContextData  = {
  tasks: Itask[];
  taskSelected?: Itask;
  addTask: (task: Itask) => void;
  selectTask: (task: Itask) => void;
  completeTask: () => void;
}

type TaskProvider = {
  children: React.ReactNode;
}

export const TaskContext  = React.createContext({} as TaskContextData);

export const TaskProvider = (props: TaskProvider) => {

  const [tasks, setTasks] = useState<Itask[]>([]);
  const [taskSelected, setTaskSelected] = useState<Itask>();


  const addTask = (task: Itask) => {
    setTasks([...tasks, task]);
  }

  const completeTask = () => {
    if (taskSelected) {
      setTasks(tasks.map(task => {
        if (task.id === taskSelected.id) {
          task.completed = true;
          task.selected = false;
        }        
      return task;
      }))
    }
  }

  const selectTask = (taskSelected: Itask) => {
    setTaskSelected(taskSelected);
    setTasks(tasks.map(task => {
      task.selected = task.id === taskSelected.id ? true : false;
      return task;
    }))
  }

  return (
    <TaskContext.Provider value={{tasks, taskSelected, addTask, completeTask, selectTask}}>
      {props.children}
    </TaskContext.Provider>
  )
};

export const useTask = () => React.useContext(TaskContext);