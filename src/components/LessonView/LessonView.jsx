import React from 'react'
import { useState } from 'react';
import LessonButton from './LessonButton';
import dummyData from "../../Assets/dummydata";
import styles from './LessonView.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';

import NewLessonView from '../NewLessonView';

const LessonView = () => {
  const [ newLessonModal, setNewLessonModal ] = useState(false);
  const [ editLessonModal, setEditLessonModal ] = useState(false);

 const handleNewLessonView = (e) => {
     e.preventDefault();
     setNewLessonModal(true);
 }

 const handleCloseNewLessonView = (e) => {
    e.preventDefault();
    setNewLessonModal(false);
  }

  const handleEditLessonView = (e) => {
    e.preventDefault();
    setEditLessonModal(true);
}

const handleCloseEditLessonView = (e) => {
   e.preventDefault();
   setEditLessonModal(false);
 }


//to set border on selection
const [globalBorder, setGlobalBorder]=useState(false);
   
 
//[0] index will be replaced by state variable 
  const retrieveLessons = dummyData.moduleList.module03.lessons.Lesson1
  const lessonsArr = Object.values(retrieveLessons)
 

  const lessonButtonJSX = lessonsArr.map(lesson => {
    return <LessonButton 
             lesson={lesson}
             globalBorder={globalBorder}
             setGlobalBorder={setGlobalBorder}
             modal={editLessonModal}
             clicked={handleEditLessonView}
             closed={handleCloseEditLessonView}
            
             
             />
  })

  




  return (

   <> 
    <section className={styles.lessonView}>
        <div className={styles.lessonViewTitle}>
          <h1 className={styles.lessonHeading}>Lessons</h1>
          <div className={styles.lessonViewNav}>
          {newLessonModal && <NewLessonView modal={newLessonModal} onClose={handleCloseNewLessonView}/>}
            <button onClick={handleNewLessonView}><FontAwesomeIcon icon={faPlusSquare} /></button>
          </div>
          
        </div>
        <div className={styles.lessonViewButtons}>
          {lessonButtonJSX}
        </div>
    </section>
    
  </>     
      

    
    


    
  )
}

export default LessonView;