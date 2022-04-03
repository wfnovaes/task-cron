import { Itask } from '../../../types/Itask';
import style from './Item.module.scss';

interface Props extends Itask {
  selectTask: (taskSelected: Itask) => void;
}

export default function Item({name, time, selected, completed, id, selectTask }: Props) {
  return (
    <li 
      className={`
        ${style.Item} 
        ${selected ? style.SelectedItem : ''} 
        ${completed ? style.CompletedItem : ''}`
      } 
      onClick={() => !completed && selectTask({id, name, time, selected, completed})}
    >
      <h3>{name}</h3>
      <span>
        {time}
      </span>
      {completed && <span className={style.Done} aria-label="Completed"></span>}
    </li>
  )
}