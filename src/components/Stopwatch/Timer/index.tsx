import style from './Timer.module.scss';

interface Props {
  time: number | undefined;
}

export default function Timer({ time = 0 } : Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteDecimal, minuteUnit] = String(minutes).padStart(2, '0');
  const [secondDecimal, secondUnit] = String(seconds).padStart(2, '0');

  return (
    <>
      <span className={style.timerNumber}>{minuteDecimal}</span>
      <span className={style.timerNumber}>{minuteUnit}</span>
      <span className={style.timerDivision}>:</span>
      <span className={style.timerNumber}>{secondDecimal}</span>
      <span className={style.timerNumber}>{secondUnit}</span>
    </>
  )
}