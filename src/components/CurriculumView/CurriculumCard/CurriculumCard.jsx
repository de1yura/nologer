import React, {useState, useEffect} from 'react'
import styles from "./CurriculumCard.module.scss"


const CurriculumCard = (props) => {

  const { curriculum, globalBullet, setGlobalBullet, index } = props;

  const [selected, setSelected] = useState(false);
  const [bool, setBool] = useState(false);

  const isCurriculumSelected = () => {
    if(selected==false){
      setBool(true)
      setGlobalBullet(!globalBullet)
    }
    else{
      setGlobalBullet(false);
    }
  }

  useEffect(()=>{
    setSelected(false);
    if(bool==true){
      setSelected(true)
    }
      setBool(false);
  }, [globalBullet])


  return (
    <button className={styles.sideContainer} onClick={isCurriculumSelected}>
      <div className={styles.pTagStyler}>
        <p>{curriculum[index].name}</p>
      </div>
      <div className={selected? styles.selected : null} ></div>
    </button>
  )
}

export default CurriculumCard