import React from 'react'
import { useState, useEffect } from 'react';
import EditLessonView from "../../EditLessonView/EditLessonView";
import { faEdit} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./LessonButton.module.scss";
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const LessonButton = ( props ) => {

  const { lesson, globalBorder, setGlobalBorder, clicked, modal, closed } = props;
//to control border selection
  const [ selected, setSelected ] = useState(false);
  const [ bool, setBool ] = useState(false);
//identify and toggle border on and off
  const isCurriculumSelected = () => {
    if(selected === false){
      setBool(true)
      setGlobalBorder(!globalBorder)
    }
    else{
      setGlobalBorder(false);
    }
  }

  useEffect(()=>{
    setSelected(false);
    if(bool == true){
      setSelected(true)
    }
      setBool(false);
  }, [globalBorder])
  

  return (
    <div>
          <button onClick={isCurriculumSelected} className={selected ? styles.selected : styles.notSelected}>
            <p className={styles.lessonTitle}>{lesson}</p>
          <span className={styles.editButton}>
            <button  onClick={clicked} className={styles.addCourseButton} ><FontAwesomeIcon icon={faEdit} className={styles.addIcon}/></button>
            <button className={styles.addCourseButton} ><FontAwesomeIcon icon={faTrashAlt} className={styles.addIcon} /></button>
          </span>
          </button>
          {modal && <EditLessonView modal={modal} closed={closed}/>}
    </div>
  )
}

export default LessonButton
