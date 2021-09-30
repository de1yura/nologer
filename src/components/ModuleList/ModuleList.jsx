import React, {useState, useEffect} from 'react'
import ModuleButton from './ModuleButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
// import styles from './ModuleButton/ModuleButton.module.scss'
import styles from './ModuleList.module.scss'

const ModuleList = () => {

  const [data, setData] = useState(
    [{
    name: 'Web Fundamentals',
    description: 'HTML and CSS',
  }, 
  {
    name: 'SCSS', 
    description: 'Nesting and variables'
  },{
    name: 'Java',
    description: 'Syntax and similarities with JS'
  },{
    name: 'React',
    description: 'Props'
  }])

    const [modal, setModal] = useState(false)
    const [name, setName] = useState('')
    const [description, SetDescription] = useState('')
    const [heading,setHeading]=useState("Create a new Module")
    const [editBtn,setEditBtn]=useState("Create module")


    //state for changing selected module
    const [globalBorder, setGlobalBorder] = useState(true);

    const selectGlobalBorder = () => {
      setGlobalBorder(!globalBorder);
    }


  let newModule ='';

  const dataJSX = data.map((e, index)=>{
    
    return <ModuleButton 
    index={index}
    data={data} 
    setData={setData}
    setModal={setModal} 
    modal={modal}
    setName={setName} 
    SetDescription={SetDescription} 
    description={description}
    setHeading={setHeading} 
    heading={heading}
    setEditBtn={setEditBtn} 
    editBtn={editBtn}
    globalBorder={globalBorder}
    setGlobalBorder={setGlobalBorder}
    />
  })


     //Close popup
     const closePopup = (e) => {
      setModal(false)
       setName('')
       SetDescription('')
  }

   //Handle submit plus
   const handleSubmit = (e) => {
    e.preventDefault()
      if(e.target[2].innerHTML === 'Create module') {
        newModule = {name: name,description: description}
        data.push(newModule)
        setData(data)
        closePopup()
        } 
    }

    // Pop up modal
    const addPopup = (e, index) => {
    
     setModal(true)
     setHeading("Create a new Module")
     setEditBtn("Create module")
   }
    
  
  
 

  return (
    <section>
    <div className={styles.main}>
    {/* <h3 className={styles.h3}>Modules 
    <button className={styles.addCourseButton}><FontAwesomeIcon onClick={(e) => {addPopup(e)}} icon={faPlusSquare}/></button></h3> */}
    <div className = {styles.headwrapper}>
    <h3 className={styles.h3}> Modules <button className={styles.addCourseButton}><FontAwesomeIcon icon={faPlusSquare} onClick={(e) => {addPopup(e)}} /></button></h3>
    </div>
   
    {/* e.target.tagName */}
     {/* onClick={(e) => {addPopup(e)}} */}
    <div>
    { modal && <div className={styles.popup}> 
        
    <div className={styles.lessonsOverlay} />
      <div className={styles.lessonsModal}>
      
            <p  className= {styles.p} onClick={(e) => {closePopup(e)}}> <FontAwesomeIcon icon= {faTimesCircle}></FontAwesomeIcon> </p>
            <form onSubmit={handleSubmit} className={styles.lessons}>
                         
              <h3>Create New Module</h3>
              <div className={styles.lessonName}>
                  <label className={styles.label} htmlFor="">Name Of Module</label>

                  <input onChange={(e) => {setName(e.target.value)}} className={styles.input1} required  type="text" id="" />
              </div>
              <div className={styles.lessonDescription}>
                  <label className={styles.label} htmlFor="">Description</label>
                  <textarea onChange={(e) => {SetDescription(e.target.value)}} className={styles.input2} maxLength='20' cols="30" rows="5" ></textarea>
              </div>
              <button >{editBtn}</button>
                         
            </form>
      

      </div>

    </div> }
    </div>
</div>

{dataJSX}
</section>

  )
}

export default ModuleList
