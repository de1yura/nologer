import React from 'react'
import styles from './EditInputs.module.scss'


const EditInputs = (props) => {
  
//courselist from dummydata.js

  //need this data from dummydata.js
  // [courseName, dateStart, support, leadCoach, numberOfWeeks] 

  //map the data and assign it to placeholder and placeholder

    
    return (

      <>
      <div className={styles.labelContainer} >
      <label className={styles.inputHeadings} htmlFor="courseName">
          Course Name
        </label>
     <input type="text" name="courseName" className={styles.smallInput} /*value={{/*props.data.courseName}*/ placeholder={props.data.courseName}   />
   </div>

   <div className={styles.labelContainer} >
      <label className={styles.inputHeadings} >
          Start Date
        </label>
     <input type="date" name="courseName" className={styles.dateInput} /*value={props.data.dateStart}*/ placeholder={props.data.dateStart}   />
   </div>

   <div className={styles.labelContainer} >
      <label className={styles.inputHeadings} >
          Lead Coach
        </label>
     <input type="text" name="courseName" className={styles.smallInput} /*value={props.data.courseName}*/ placeholder={props.data.leadCoach}   />
   </div>

   <div className={styles.labelContainer} >
      <label className={styles.inputHeadings} >
          Support Court
        </label>
     <input type="text" name="courseName" className={styles.smallInput} /*value=props.data.courseName}*/ placeholder={props.data.support}   />
   </div>


   <div className={styles.labelContainer} >
      <label className={styles.inputHeadings} >
          Number of Weeks
        </label>
     <input type="number" name="courseName" className={styles.smallInput} /*value={props.data.courseName}*/ placeholder={props.data.numberOfWeeks} max = "12" min = "1" />
   </div>

      
  </>
      )
  
            
    
    
  }


export default EditInputs
