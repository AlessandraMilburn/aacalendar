import { hours } from "../utils/calendar.utils";
import styles from '../styles/Calendar.module.css';
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Hour({ hour }) {
  //logic
  const [showTime, setShowTime] = useState(false);
  const onClick = () => setShowTime(true);

  return (
    //template
    <>
      <div>{hours.map((hour, id) => (
        <div 
          key={id} 
          className={styles.hours}
          onClick={onClick}
        >{ showTime ? [hour] : null}
          <div></div>
        </div>
      ))}</div>

    </>
  )
}

//Note to Ana - how can we only show one cell time instead of the full day time?
//I'll explore in the next few days