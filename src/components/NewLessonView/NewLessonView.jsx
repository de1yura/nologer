import React, {useState} from 'react'
import styles from "./NewLessonView.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const NewLessonView = (props) => {

  const { onClose } = props;

  

  

  return (
    <>
      <div className={styles.lessonsOverlay} />
      <div className={styles.lessonsModal}>
      
            <p onClick={onClose} ><FontAwesomeIcon icon= {faTimesCircle}></FontAwesomeIcon> </p>
            <form className={styles.lessons}>
                         
              <h3>Create New Lesson</h3>
              <div className={styles.lessonName}>
                  <label className={styles.label} htmlFor="">Name Of Lesson</label>

                  <input className={styles.input1} required  type="text" id="" />
              </div>
              <div className={styles.lessonDescription}>
                  <label className={styles.label} htmlFor="">Description</label>
                  <textarea className={styles.input2} maxLength='20' cols="30" rows="5" ></textarea>
              </div>
              <button>Create Lesson</button>
                         
            </form>
      

      </div>






    </>
    
  )
}

export default NewLessonView
