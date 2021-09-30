import React, {useState, useEffect} from 'react';
import CourseListItem from '../CourseListItem/CourseListItem';
import dummyData from '../../Assets/dummydata';
import styles from './CourseList.module.scss';

import { firestore } from '../../container/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';


const CourseList = (props) => {

  // Schedule state
  const setScheduleCourse = props.setScheduleCourse;
  // Retrieve back-end courselist
  const firestoreData = props.firestoreData;


  // SETUP DATES 
  //------------------------------------------------------------------------------//

  //Functions to return dates as numbers, e.g. 11/07/2022 to 20220711
  const dateConstructor = (day, month, year) => {
    const date = Number(String(year) + String(month) + String(day));
    return date;
  }
  //Get current date + course start and end dates
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

  //Function to sort courses in a filtered list by most-to-least recent in terms of start date.
  const sortByStartDate = (filterList) => {
    return filterList.sort((a, b) => (getCourseDate(a.dateStart) < getCourseDate(b.dateStart)) ? 1 : -1);
  }


  //BULLET POINT HANDLING
  //------------------------------------------------------------------------------//
  //Global button for course card bullet points; all buttons become false on switch.

  const [globalBullet, setGlobalBullet] = useState(true);

  const selectGlobalBullet = () => {
    setGlobalBullet(!globalBullet);
  }

  //FILTERS
  //------------------------------------------------------------------------------//
  // Functions to filter received courselist by past/current/future.
  // Defining the parameters for each relevant funcition
  const filterCurrent = (current, start, end) => {
    return current <= end && current >= start;
  }
  const filterPast = (current, end) => {
    return end < current;
  }
  const filterFuture = (current, start) => {
    return start > current;
  }

  //State that will display filtered list on page by default (see useEffect at bottom), will be updated using filter toggle functions.
  const [displayList, setDisplayList] = useState([]);

  // Filter functions
  // Turn Firestore's object of course objects into an array
  const filterCurrentCourses = () => {
    const filterList = firestoreData.filter((course) => 
      filterCurrent(getCurrentDate(), getCourseDate(course.dateStart), getCourseDate(course.dateEnd))
    )
    return sortByStartDate(filterList).map( (course, index) => {
      return <CourseListItem key={index + "current"} course={course} globalBullet ={globalBullet} setGlobalBullet={setGlobalBullet} setScheduleCourse={setScheduleCourse}/>
    });
  }
  const filterPastCourses = () => {
    const filterList = firestoreData.filter((course) => 
      filterPast(getCurrentDate(), getCourseDate(course.dateEnd))
    )
    return sortByStartDate(filterList).map( (course, index) => {
      return <CourseListItem key={index + "past"} course={course} globalBullet ={globalBullet} setGlobalBullet={setGlobalBullet} setScheduleCourse={setScheduleCourse}/>
    });
  }
  const filterFutureCourses = () => {
    const filterList = firestoreData.filter((course) => 
      filterFuture(getCurrentDate(), getCourseDate(course.dateStart))
    )
    return sortByStartDate(filterList).map( (course, index) => {
      return <CourseListItem key={index + "future"} course={course} globalBullet ={globalBullet} setGlobalBullet={setGlobalBullet} setScheduleCourse={setScheduleCourse}/>
    });
  }

  //Functions to toggle Past/Current/Future filters.
  const filterCurrentHandler = () => {
    setDisplayList(filterCurrentCourses());
  }
  const filterPastHandler = () => {
    setDisplayList(filterPastCourses());

  }
  const filterFutureHandler = () => {
    setDisplayList(filterFutureCourses());
  }
  
  //UNDERLINE SELECTED FILTER BUTTON
  //------------------------------------------------------------------------------//
  const [pastSelected, setPastSelected] = useState(false);
  const [currentSelected, setCurrentSelected] = useState(true);
  const [futureSelected, setFutureSelected] = useState(false);
  
  //Underline current button and remove underlines on others
  const isPastSelected = () => {
    setPastSelected(true);
    setCurrentSelected(false);
    setFutureSelected(false);
  }
  const combinedPast = () => {
    setScheduleCourse("");
    filterPastHandler();
    isPastSelected();
  }
    
  const isCurrentSelected = () => {
    setCurrentSelected(true)
    setPastSelected(false);
    setFutureSelected(false);
  };
  const combinedCurrent = () => {
    setScheduleCourse("");
    filterCurrentHandler()
    isCurrentSelected()
  }

  const isFutureSelected = () => {
    setFutureSelected(true)
    setPastSelected(false);
    setCurrentSelected(false);
  };
  const combinedFuture = () => {
    setScheduleCourse("");
    filterFutureHandler()
    isFutureSelected()
  }

  const runFilter = () => {
    if (pastSelected){
      filterPastHandler();
    } else if (currentSelected){
      filterCurrentHandler();
    } else if (futureSelected){
      filterFutureHandler();
    }
  }

  //Initial render + re-render if course is selected
  useEffect(() => {
    console.log(firestoreData);
    runFilter();
  }, [globalBullet, firestoreData])

  return (
    <section className={styles.listContainer}>
      <nav className={styles.listMenu}>
        <h1 className={styles.courseListHeader}>
          <p>Courses</p>
          <button className={styles.addCourseButton}><FontAwesomeIcon icon={faPlusSquare} /></button>
        </h1>
        <div className={styles.filters}>
          <button onClick={combinedPast} className={pastSelected ? styles.current : null}>Past</button>
          <button onClick={combinedCurrent} className={currentSelected ? styles.current : null}>Current</button>
          <button onClick={combinedFuture} className={futureSelected ? styles.current : null}>Future</button>
        </div>
      </nav>
      <main className={styles.allCoursesList}>
        {displayList}
      </main>
    </section>
  )
}

export default CourseList;