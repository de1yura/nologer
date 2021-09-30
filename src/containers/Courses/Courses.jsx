import React, {useState, useEffect} from 'react';
import CourseList from "../../components/CourseList";
import { firestore } from "../../container/firebase";
import styles from "./Courses.module.scss";
import Schedule from '../Schedule';


const Courses = (props) => {
    
    const firestoreData = props.firestoreData;

    //--State to pass from CourseListItem.jsx to Schedule.jsx--//
    const [scheduleCourse, setScheduleCourse] = useState("");
    //--------//

    return (
        <div className={styles.courseDisplay}>
            <CourseList firestoreData={firestoreData} setScheduleCourse={setScheduleCourse}/>
            <Schedule course={scheduleCourse}/>
            <section className={styles.flexPlaceholder}></section>
        </div>
    )
}

export default Courses
