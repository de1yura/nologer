import React, { useState, useEffect } from 'react';
import styles from './CourseListItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

const CourseListItem = (props) => {

  // Schedule state
  const setScheduleCourse = props.setScheduleCourse;

  // Pass down course name, start date and color theme for use if needed
  const course = props.course;
  const {courseName, dateStart, color} = props.course;
  const {globalBullet, setGlobalBullet} = props;

  // Shorten course name if too long
  const nameShortener = (name) => {
    if (name.length > 8){
      return name.substr(0, 8) + "...";
    } else{
      return name;
    }
  }
  const shortName = nameShortener(courseName);

  //Take date value and remake for display
  const dateArrange = dateStart.split("-");
  //Day
  if (dateArrange[2] == "01"){dateArrange[2] = "1st"}
  else if (dateArrange[2] == "02"){dateArrange[2] = "2nd"}
  else if (dateArrange[2] == "03"){dateArrange[2] = "3rd"}
  else if (dateArrange[2] == "04"){dateArrange[2] = "4th"}
  else if (dateArrange[2] == "05"){dateArrange[2] = "5th"}
  else if (dateArrange[2] == "06"){dateArrange[2] = "6th"}
  else if (dateArrange[2] == "07"){dateArrange[2] = "7th"}
  else if (dateArrange[2] == "08"){dateArrange[2] = "8th"}
  else if (dateArrange[2] == "09"){dateArrange[2] = "9th"}
  else if (dateArrange[2] == "21"){dateArrange[2] = "21st"}
  else if (dateArrange[2] == "22"){dateArrange[2] = "22nd"}
  else if (dateArrange[2] == "23"){dateArrange[2] = "23rd"}
  else if (dateArrange[2] == "31"){dateArrange[2] = "31st"}
  else{dateArrange[2] = dateArrange[2] + "th"}
  //Month
  if (dateArrange[1] == "01"){dateArrange[1] = "Jan"}
  else if (dateArrange[1] == "02"){dateArrange[1] = "Feb"}
  else if (dateArrange[1] == "03"){dateArrange[1] = "Mar"}
  else if (dateArrange[1] == "04"){dateArrange[1] = "Apr"}
  else if (dateArrange[1] == "05"){dateArrange[1] = "May"}
  else if (dateArrange[1] == "06"){dateArrange[1] = "Jun"}
  else if (dateArrange[1] == "07"){dateArrange[1] = "Jul"}
  else if (dateArrange[1] == "08"){dateArrange[1] = "Aug"}
  else if (dateArrange[1] == "09"){dateArrange[1] = "Sep"}
  else if (dateArrange[1] == "10"){dateArrange[1] = "Oct"}
  else if (dateArrange[1] == "11"){dateArrange[1] = "Nov"}
  else if (dateArrange[1] == "12"){dateArrange[1] = "Dec"}
  else{}
  //Display
  const dateStartDisplay = 
  [dateArrange[2], dateArrange[1], dateArrange[0]].join(" ");


  // Available styles for course cards = red, blue, green, yellow. Conditionally adding classes based on props.
  const buttonStyle = [styles.courseButton];
  if (color) buttonStyle.push(styles[color]);

  
  //Passed down state for toggling
  
   //Function that adds bullet point to currently clicked course card

    const [bullet, setBullet] = useState(false);
    const [bool, setBool] = useState(false);

    const isCourseSelected = () => {
      if (bullet == false){
        setBool(true);
        //set state in courses.jsx to use in schedule.jsx
        setScheduleCourse(course);
        setGlobalBullet(!globalBullet);
      } else{
       setScheduleCourse("");
       setBullet(false);
      }
    } 
    useEffect(() => {
      setBullet(false);
      if (bool == true){
        setBullet(true);
      }
      setBool(false);
    }, [globalBullet])
  

  return (
    <button className={buttonStyle.join(" ")} onClick={isCourseSelected}>
      <span className={styles.courseInfo}>
        <div className={styles.nameDate}>
          <p className={styles.nameDate__name}>{shortName}</p>
          <p className={styles.nameDate__date}>{dateStartDisplay}</p>
        </div>
      </span>
      <span className={styles.editIcon}><FontAwesomeIcon icon={faEdit} /></span>
      <span className={bullet ? styles.bullet : styles.notBullet}></span>
    </button>
  )
}

export default CourseListItem;
