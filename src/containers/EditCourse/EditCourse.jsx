import React from 'react'
import InputContainer from '../CreateNewCourse/InputContainer'
import styles from './EditCourse.module.scss'
import dummyData from "../../Assets/dummydata"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import EditInputs from './EditInputs/EditInputs';
const EditCourse = () => {



    return (
        <main className={styles.inputContainer}>
        <div className={styles.heading}> 
        <h2 className={styles.courseHeading}>{dummyData.courseList[0].courseName}</h2>
        </div>
        <div className={styles.exitBtnContainer}>
        <p className={styles.exitBtn}> <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon></p>
        </div>
            <EditInputs data={dummyData.courseList[0]}  />
           
            <div className={styles.dropdownWrapper}>
            <label className={styles.inputHeadings} htmlFor="courseName">
            Curriculum
            </label>
            <select name="curriculum" id="curriculum" className={styles.dropDown}>
            <option value="Java and Web Fundamentals">Java and Web Fundamentals</option>
            <option value="Data Analytics" >Data Analytics</option>
            <option value="UX/UI" >UX/UI</option>
            </select>
            </div>
            <div className={styles.descriptionContainer}>
            <label className={styles.inputHeadings}>
          Description
          </label>
          <input type="text" name="description" className={styles.description} />
          </div>
            <div className={styles.button}>
        <button className={styles.submitBtn}>Edit Course</button>
        </div>
      </main>
    )
    }
export default EditCourse
