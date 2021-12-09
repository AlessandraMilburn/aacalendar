import styles from '../styles/Calendar.module.css';
import { useEffect, useState } from "react";
import styled from "styled-components";
import Hour from "./Hour";
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
  }, [isActiveDay, selectedDay]); //<- dependency array, JS asking for isActiveDay to be added

  return (
    //template
    <div className={styles.day}>
      <ActiveDay isActiveDay={isActiveDay}>
        <div
          className={styles.weekdayTitle}
          onClick={() => setSelectedDay(day)}
        >
          {day}
          {/* {new Date().getDate()} */}
        </div>
        <Hour />
      </ActiveDay>
    </div >
    // <div key={id}> {weekday} </div>
  )
}