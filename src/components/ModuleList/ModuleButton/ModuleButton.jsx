import React, {useState, useEffect} from 'react'
import styles from './ModuleButton.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'  



const ModuleButton = (props) => { 
   

  const {data, index, setData, editBtn, setHeading, heading, setEditBtn, globalBorder, setGlobalBorder} = props;


  //Function that changes border when clicked on and toggles when clicked on another.
  const [selected, setSelected] = useState(false);
  const [bool, setBool] = useState(false);
  
  const isModuleSelected = (index) => {
      if (selected==false){
          setBool(true);
          setGlobalBorder(!globalBorder);
      }
      else{
          setGlobalBorder(false);
      }
  } 

  useEffect(()=> {
      setSelected(false);
      if(bool==true){
        setSelected(true);
      }
      setBool(false);
  }, [globalBorder])





const [edit,setEdit]=useState("Edit")
const [editModal, setEditModal] = useState(false)
const [editName, setEditName] = useState(data[index].name)
const [editDescription, setEditDescription]=useState(data[index].description)

    //Handle submit edit
    const handleSubmitEdit = (e) => {
        e.preventDefault()
        let newData =[... data, data[index].description= editDescription, data[index].name=editName]
            // setData([...data, data[index].description= editDescription])
            newData.pop()
            newData.pop()
            setData(newData)
        console.log(data)
        closePopup()
    }


        //add popup edit
    const addPopupEdit = (e) => {
        console.log(data[index].name);
        setEditModal(true)
        setHeading("Edit Module")
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
     setEditModal(false)
}




    return (
        // Edit Popup
    <div className={styles.main}>
                { editModal && <div className={styles.popup}> 
                <div className={styles.lessonsOverlay} />
      <div className={styles.lessonsModal}>
      
            <p  className= {styles.p} onClick={(e) => {closePopup(e)}}> <FontAwesomeIcon icon= {faTimesCircle}></FontAwesomeIcon> </p>
            <form onSubmit={handleSubmitEdit} className={styles.lessons}>
                         
              <h3>Edit Module</h3>
              <div className={styles.lessonName}>
                  <label className={styles.label} htmlFor="">Name Of Module</label>

                  <input placeholder={editName} onChange={(e) => {setEditName(e.target.value)}} className={styles.input1}  type="text" id="" />
              </div>
              <div className={styles.lessonDescription}>
                  <label className={styles.label} htmlFor="">Description</label>
                  <textarea placeholder={editDescription} onChange={(e) => {setEditDescription(e.target.value)}} className={styles.input2} maxLength='20' cols="30" rows="5" ></textarea>
              </div>
              <button >Edit</button>
                         
            </form>
      

      </div>

{/* Each Module Button */}
    </div>
          }

            <button onClick={isModuleSelected} className={selected ? styles.selected : styles.notSelected}>
                <div className={styles.cardContainer}>
                    <div className={styles.cardHeader}>
                        <h4>{data[index].name}</h4>
                        <p>{data[index].description}</p>
                    </div>
                    {/* <button onClick={(e) => {addPopup(e, index)}}>Edit</button> */}
                    <div className={styles.editIcon}>
                    <FontAwesomeIcon onClick={(e) => { addPopupEdit(e, index) }} className={styles.editIcon} icon={faEdit}></FontAwesomeIcon>
                    <span className={styles.deleteIcon}><FontAwesomeIcon onClick={(e) => { deleteModule(e, index) }} className={styles.editIcon} icon={faTrashAlt} ></FontAwesomeIcon></span>
                        {/* <button onClick={(e) => {deleteModule(e, index)}}>Delete</button> */}
                    </div>
                </div>
             </button>   

    </div>
            
    )
}

export default ModuleButton
