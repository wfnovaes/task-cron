import React, { useState } from 'react';
import Item from './Item';
import style from  './List.module.scss';
import { useTask } from '../../contexts/taskContext';

function List() {

  const { tasks, selectTask } = useTask();

  return(
    <aside className={style.TasksList}>
        <h2>
          Tasks
        </h2>
        <ul>
          {tasks.map((task) => (
            <Item 
            key={task.id}
              selectTask={selectTask}
              {...task}
            />
          ))}
        </ul>
    </aside>
  )
}

export default List;