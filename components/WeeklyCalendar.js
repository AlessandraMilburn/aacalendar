import { weekdays, hours } from "../utils/calendar.utils";
import Day from "./Day";
import styles from '../styles/Calendar.module.css';

export default function WeeklyCalendar() {
  return (
    <>
      <div className={styles.week}>
        <div>
          <div className={styles.weekdayTitle}></div>
          {hours.map((hour, id) => (
            <div key={id} className={styles.hours}>
              <div>{hour}</div>
            </div>
          ))}
        </div>
        {weekdays.map((day, id) => (
          <Day key={id} day={day} />
        ))}
      </div>
    </>
  )
}