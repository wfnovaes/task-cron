import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Stopwatch from '../components/Stopwatch';
import { TaskProvider } from '../contexts/taskContext';
import { Itask } from '../types/Itask';
import style from './App.module.scss';

function App() {

  return (
    <div className={style.AppStyle}>
      <TaskProvider>
        <Form />
        <List />
        <Stopwatch />
      </TaskProvider>      
    </div>
  );
}

export default App;
