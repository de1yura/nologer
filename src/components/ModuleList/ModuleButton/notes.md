import React from 'react'
import styles from './ModuleButton.module.scss'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';


const ModuleButton = ({data, setData}) => {
    const [modal, setModal] = useState(false)
    const [name, setName] = useState('')
    const [description, SetDescription] = useState('')
    const [module,setModule]=useState(false)
    const [heading,setHeading]=useState("Create a new Module")
    const [editBtn,setEditBtn]=useState("Create module")
    const [deletebtn, setDeletebtn] =useState(false)
  

    // //BULLET POINT HANDLING
  //------------------------------------------------------------------------------//
  //Global button for course card bullet points; all buttons become false on switch.


  const [selected, setSelected] = useState(false);

  const isModuleSelected = (index) => {
      console.log(selected, index);
      setSelected(!selected);
  }

    const handleSubmitEdit = (e) => {
        e.preventDefault()
        if (e.target[2].innerHTML === 'Edit') {
            data.forEach((todo, index) => {
            if ( todo.name == e.target[0].defaultValue) {
                data[index] = {name: name, description: description}
                closePopup()
            } 
        })
        }}
        
        const handleSubmitPlus = (e) => {
           e.preventDefault()
         if(e.target[2].innerHTML == 'Create module') {
            newModule = {name: name,description: description}
        console.log(data);
        data.push(newModule)
        console.log(data);
        setData(data)
        console.log(data);
        closePopup()
        } 
    }

// Pop up modal
    const addPopupPlus = (e, index) => {
       if(e.target.innerHTML == '+'){
        setModal(true)
        setHeading("Create a new Module")
        setEditBtn("Create module")
       }
      }

const addPopupEdit = (e, index) => {
            setModal(true)
            setHeading("Edit Module")
            setName(data[index].name)
            SetDescription(data[index].description)
            setEditBtn("Edit")
    }
    
// DELETE ELEMENT WITH BUTTON
const deleteModule=(e, index)=>{
    e.preventDefault()
    console.log(data[index]);
    const copy=data.filter(d=>data.indexOf(d)!=index)
    setData(copy)
}

//Close popup
    const closePopup = (e) => {
        setModal(false)
         setName('')
         SetDescription('')
    }
    
    let newModule ='';


    // Return section
    return (
        <div className={styles.main}>
            
            {/* <h3 className={styles.h3}>Modules 
            <button className={styles.addCourseButton}><FontAwesomeIcon onClick={(e) => {addPopup(e)}} icon={faPlusSquare}/></button></h3> */}
            <h3 className={styles.h3}>Modules 
            <button onClick={(e) => {addPopup(e)}} className={styles.addCourseButton}><button>+</button></button></h3>
            
            {/* e.target.tagName */}
             {/* onClick={(e) => {addPopup(e)}} */}
            <div>
            { modal && <div className={styles.popup}> 
                
                <div className={styles.wrapper} >
                     <div className={styles.close} onClick={(e) => {closePopup(e)}}>x</div> 

                     <form onSubmit={handleSubmit}>
                    <div className={styles.modules} >
                            <h2>{heading}</h2>
                            <div>
                                <label className={styles.label} htmlFor="">Name Of Module</label>
                                <input required type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
                            </div>
                            <div>
                                <label className={styles.label} htmlFor="">Description</label>
                                <textarea maxLength='20' cols="30" rows="10" value={description} onChange={(e) => {SetDescription(e.target.value)}} ></textarea>
                            </div>
                            <button >{editBtn}</button>
                    </div>
                     </form>
                     
                </div>
            </div> }
            </div>

            <div className={styles.maps} >

                {data.map((e, index) => {
                    return <button className={selected ? styles.selected : null} key={index} onClick={isModuleSelected}>
                        
                        <div className={styles.cardContainer}>
                        <div className={styles.cardHeader}>
                            <h4>{e.name}</h4>
                            <p>{e.description}</p>
                        </div>
                        {/* <button onClick={(e) => {addPopup(e, index)}}>Edit</button> */}
                        <div className={styles.editIcon}>
                            <span onClick={(e) => {addPopup(e, index)}}><FontAwesomeIcon   className={styles.editIcon} icon= {faEdit}></FontAwesomeIcon></span>
                            <FontAwesomeIcon  onClick={(e) => {deleteModule(e, index)}} className={styles.editIcon} icon= {faTrashAlt} ></FontAwesomeIcon>
                            {/* <button onClick={(e) => {deleteModule(e, index)}}>Delete</button> */}
                        </div>
                        </div>
                    </button>
                    })}
            </div>
        </div>
    )
}

export default ModuleButton
