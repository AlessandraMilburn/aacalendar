import { hours } from "../utils/calendar.utils";
import styles from '../styles/Calendar.module.css';
import { useEffect, useState } from "react";
import styled from "styled-components";

const ActiveDay = styled.div`
  background-color: ${(props) => props.isActiveDay ? 'lightpink' : 'white'};
`;

export default function Day({ day }) {
  //logic
  const [selectedDay, setSelectedDay] = useState();
  const isActiveDay = selectedDay === day;
  // console.log('day is', day, 'selected day is', selectedDay);

  useEffect(() => {
    console.log(isActiveDay);
  }, [selectedDay]); //<- dependency array

  return (
    //template
    <div className={styles.day}>
      <ActiveDay isActiveDay={isActiveDay} >
        <div
          className={styles.weekdayTitle}
          onClick={() => setSelectedDay(day)}
        >
          {day}
        </div>
        <div>{hours.map(() => (
          <div key={Math.random()} className={styles.hours}>
            <div></div>
          </div>
        ))}</div>
      </ActiveDay>
    </div >
    // <div key={id}> {weekday} </div>
  )
}