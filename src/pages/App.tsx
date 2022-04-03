import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Stopwatch from '../components/Stopwatch';
import { Itask } from '../types/Itask';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<Itask[]>([]);
  const [taskSelected, setSelected] = useState<Itask>();

  function selectTask(taskSelected: Itask){
    setSelected(taskSelected);
    setTasks(tasks.map(task => {
      task.selected = task.id === taskSelected.id ? true : false;
      return task;
    }))
  }

  function finishTask(){
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

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
        tasks={tasks} 
        selectTask={selectTask}
      />
      <Stopwatch taskSelected={taskSelected} finishTask={finishTask} />
    </div>
  );
}

export default App;
