import React from 'react'

import styles from './InputContainer.module.scss';

const InputContainer = (props) => {



const labelNames = ["Course Name",  "Start Date","Lead Coach", "Support Coach", "Number of Weeks", ]

  return (
    <>
    {labelNames.map(labelName => {
      return (
        <>
        <div className={styles.labelContainer} >
        <label className={styles.inputHeadings} htmlFor="courseName">
            {labelName}
          </label>
       <input type="text" name="courseName" className={styles.smallInput} placeholder={labelName}  />
     </div>

       </>
      )

    })}

          
    </>
  )
}

export default InputContainer
