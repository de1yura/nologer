import React from 'react';
import InputContainer from './InputContainer/InputContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import styles from "./CreateNewCourse.module.scss"

const CreateNewCourse = () => {
    return (
        <main className={styles.inputContainer}>
        <div className={styles.heading}> 

        <h2 className={styles.courseHeading}>New Course</h2>
        </div>
        <div className={styles.exitBtnContainer}>
        <p className={styles.exitBtn}> <FontAwesomeIcon icon= {faTimesCircle}></FontAwesomeIcon></p>
        </div>
            <InputContainer  />
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
          
            <div className={styles.colorSelectors}>
            <label className={styles.inputHeadings} htmlFor="courseName">
            Theme colors
            </label>
          <input type="color" name="description" className={styles.color1} />
          </div>

            <div className={styles.descriptionContainer}>
            <label className={styles.inputHeadings}>
          Description
          </label>
          <input type="text" name="description" className={styles.description} />
          </div>
            <div className={styles.button}>
        <button className={styles.submitBtn}>Create Course</button>
        </div>

      </main>
    )
}

export default CreateNewCourse

