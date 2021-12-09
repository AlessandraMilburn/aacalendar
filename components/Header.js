import styles from '../styles/Calendar.module.css';
import { months } from "../utils/calendar.utils"
const today = new Date();
const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
const pastDaysOfYear = (today - firstDayOfYear) / 86400000;

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>Calendar</h1>
      <h4>{today.getDate()} {months[today.getMonth()]} {today.getFullYear()}</h4>
    </div>
  )
}