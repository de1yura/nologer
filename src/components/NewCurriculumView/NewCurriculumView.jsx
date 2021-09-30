import React,  {useState}from 'react'
import styles from "./NewCurriculumView.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const NewCurriculumView = (props) => {


  const { onClose, inputC, setInputC, handleSubmit } = props;


  return (
<>
      <div className={styles.curriculumOverlay} />
      <div className={styles.curriculumModal}>
            <p onClick={onClose} > <FontAwesomeIcon icon= {faTimesCircle}></FontAwesomeIcon> </p>

            <form className={styles.curriculum} onSubmit={handleSubmit}>

                         
              <h3>Create New Curriculum</h3>
              <div className={styles.curriculumName}>
                  <label className={styles.label} htmlFor="">Name Of Curriculum</label>

                  <input value={inputC} onChange={(e) => {setInputC(e.target.value)}} className={styles.input1} required  type="text" id="" />

              </div>
              <button >Create Curriculum</button>
                         
            </form>
            

      </div>






    </>
  )
}

export default NewCurriculumView
