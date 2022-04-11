import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/date";
import { useTask } from "../../contexts/taskContext";
import Button from "../Button";
import style from "./Stopwatch.module.scss";
import Timer from "./Timer";

export default function Stopwatch() {

  const [time, setTime] = useState<number>();
  const { taskSelected, completeTask } = useTask();

  useEffect(() => {
    if (taskSelected?.time) setTime(timeToSeconds(taskSelected.time));
  }, [taskSelected]);  

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        counter --;
        setTime(counter);
        regressive(counter)
      } else completeTask()
    }, 1000);
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