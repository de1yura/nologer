import React from "react";
import styles from "./ScheduleCard.module.scss";
import dummyData from "../../Assets/dummydata";

const ScheduleCard = (props) => {
  
  const {leadCoach, support, day} = props;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h3 className = {styles.day}>{day.day}</h3>
          <h3 className={styles.date}>{/*course date goes here*/}</h3>
        </div>

        <div className={styles.flex}>
          <div className={styles.flexInner}>
            <div className={styles.lightgreyone}>
              <ul>
                <li className={styles.pOne}>AM</li>
                <li className={styles.pTwo}>PM</li>
              </ul>
            </div>

            <div className={styles.blacktext}>
              <ul>

                <li className={styles.pThree}>Git</li>
                <li className={styles.pFour}>Calculator</li>

              </ul>
            </div>
          </div>

          <div className={styles.flexinnersec}>
            <div className={styles.lightgreytwo}>
              <ul>
                <li className={styles.pOne}>LEAD</li>
                <li className={styles.pTwo}>SUPPORT</li>
              </ul>
            </div>

            <div className={styles.blacktextsec}>
              <ul>
                <li className={styles.pThree}>{leadCoach}</li>
                <li className={styles.pFour}>{support}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleCard;
