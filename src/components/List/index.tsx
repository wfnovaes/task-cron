import React, { useState } from 'react';
import Item from './Item';
import style from  './List.module.scss';
import { Itask } from '../../types/Itask';


interface Props {
  tasks: Itask[];
  selectTask: (taskselected: Itask) => void;
}

function List({tasks, selectTask} : Props) {
  return(
    <aside className={style.TasksList}>
        <h2>
          Tasks
        </h2>
        <ul>
          {tasks.map((task) => (
            <Item 
              selectTask={selectTask}
              key={task.id}
              {...task}
            />
          ))}
        </ul>
    </aside>
  )
}

export default List;