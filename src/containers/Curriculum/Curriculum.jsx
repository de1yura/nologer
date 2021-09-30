import React from 'react'
import ModuleList from '../../components/ModuleList'
import NewLessonView from '../../components/NewLessonView';
import { useState } from 'react';
import LessonView from '../../components/LessonView/LessonView';
import styles from './Curriculum.module.scss'
import NavContainer from '../NavContainer';
import CurriculumView from '../../components/CurriculumView/CurriculumView';


const Curriculum = () => {
    
 const [ modal, setModal ] = useState(false);

 const handleNewLessonView = (e) => {
     e.preventDefault();
     setModal(true);
 }

 const handleCloseNewLessonView = (e) => {
    e.preventDefault();
    setModal(false);

  }


    return (
        <>
        <NavContainer />  
        <div className = {styles.curriculum}>
            <CurriculumView />
            <div className = {styles.modulelist}>
            <ModuleList/>
            </div>
            <div className = {styles.lessonview}>
            <LessonView/>
            </div>
            
        </div>
        </>
    )
}

export default Curriculum
