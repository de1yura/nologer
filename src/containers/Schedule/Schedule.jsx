import React, {useState, useEffect} from 'react';
import styles from "./Schedule.module.scss"
import { firestore } from "../../container/firebase";
import ScheduleCard from "../../components/ScheduleCard"
import dummyData from "../../Assets/dummydata";

const Schedule = (props) => {

//----DATE DETERMINATION----//
  const course = props.course;

  //state holding schedule information
  const [weekSchedule, setSchedule] = useState([]);

  //Functions to return dates as numbers, e.g. 11/07/2022 to 20220711
  const dateConstructor = (day, month, year) => {
    const date = Number(String(year) + String(month) + String(day));
    return date;
  }
  //Get current date and course dates in dateConstructor() form
  const getCurrentDate = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = ("0" + (currentDate.getMonth()+1)).slice(-2);
    const currentDay = ("0" + (currentDate.getDate())).slice(-2);
    return dateConstructor(currentDay, currentMonth, currentYear);
  }
  const getCourseDate = (date) => {
    //takes a 0000-00-00 format string and returns array with day/month/year as seperate strings (0s included)
    const datearray = date.split("-");
    //conjoins array items in reverse for a new string
    return dateConstructor(datearray[2], datearray[1], datearray[0]);
  }
  const calendarSetter = () => {
  if (course == ""){

    //do nothing if course state isn't updated yet
    setSchedule([]);

  } else {
  console.log(course);
  //determine current week
  const distanceFromStartDate = getCurrentDate() - getCourseDate(course.dateStart);
  let currentWeek = 1;
  for (let i = 1; i <= distanceFromStartDate; i += 7){
    currentWeek += 1;
  }
  let targetWeek = "Week1";
  const weekSet = () => {
    for (let i = 1; i <= course.numberOfWeeks; i++){
        if (i == currentWeek){
            targetWeek = "Week" + String(i);
        }
    }
  }
  weekSet(targetWeek);

  //take course's calendar on current week
  console.log(course.calendar);
  const weekCalendar = Object.values(course.calendar[targetWeek]);
  const map = {'Monday': 1, 'Tuesday': 2, 'Wednesday': 3, 'Thursday': 4, 'Friday': 5};
  //sort Mon-Fri
  const sortedCalendar = weekCalendar.sort((a, b) => {
    return map[a.day] - map[b.day];
  })
  setSchedule(sortedCalendar.map( (day) => {
    return <ScheduleCard leadCoach={course.leadCoach} support={course.support} day={day} />
  }));
  }
  }
  
  useEffect(() => {
    calendarSetter();
  }, [course])
//------------//

    return (
        <div className={styles.schedule}>
            <h1 className={styles.scheduleHeader}>
                <p>Schedule</p>
            </h1>
            <div className={styles.scheduleSubheading}></div>
            <section>
                {weekSchedule}
            </section>
        </div>
    )
}

export default Schedule
