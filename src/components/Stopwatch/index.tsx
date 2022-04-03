import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/date";
import { Itask } from "../../types/Itask";
import Button from "../Button";
import style from "./Stopwatch.module.scss";
import Timer from "./Timer";


interface Props {
  taskSelected: Itask | undefined;
  finishTask: () => void;
}

export default function Stopwatch({taskSelected, finishTask}: Props) {

  const [time, setTime] = useState<number>();
  
  useEffect(() => {
    if (taskSelected?.time) setTime(timeToSeconds(taskSelected.time));
  }, [taskSelected]);  

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        counter --;
        setTime(counter);
        regressive(counter)
      } else finishTask()
    }, 1000)
  }

  return ( 
    <div className={style.stopwatch}>
      <p className={style.title}>Choose a card and start the stopwatch</p>
      <div className={style.timerWrapper}>
        <Timer time={time}/>
      </div>
      <Button onClick={() => regressive(time)}>
        Start
      </Button>
    </div>
  )
}