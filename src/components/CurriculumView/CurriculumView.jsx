import React, {useState} from 'react'
import CurriculumCard from './CurriculumCard'
import styles from './CurriculumView.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import NewCurriculumView from '../NewCurriculumView/NewCurriculumView';


// import dummyData from '../../assets/dummydata';

const CurriculumView = () => {
    const [curriculum, setCurriculum] =useState([
        {name:'Java and Cloud Programming'}, 
        {name: 'Python and Data'}, 
        {name:'Data Engineering'},
        {name:'UX/UI'}])
    const [inputC, setInputC] =useState('')
    

    const [globalBullet, setGlobalBullet]=useState(false);
    const selectGlobalBullet = () => {
        setGlobalBullet(!globalBullet)
    }

    const curriculumJSX = curriculum.map((cur, index) => {
        return <CurriculumCard 
        index={index}
        curriculum={curriculum}
        globalBullet={globalBullet}
        setGlobalBullet={setGlobalBullet}
        />
    })

    const [pop, setPop] = useState(false);

    
//Add new Curriculum pop up

const [ modal, setModal ] = useState(false);

const handleNewCurriculumView = (e) => {
    e.preventDefault();
    setModal(true);
}

const handleCloseCurriculumView = (e) => {
   e.preventDefault();
   setModal(false);

 }

    // adds new curricilum
const handleSubmit = (e) => {
    e.preventDefault()
    let newCurriculum = {name: inputC}
    curriculum.push(newCurriculum)
    setCurriculum(curriculum)
    setModal(false);
    }
 
 


    return (
 
        <div className={styles.container}>

            <div className={styles.headercontainer}>
                <div className={styles.head}>
                <h4>Curriculum</h4>
                {modal && <NewCurriculumView inputC={inputC} setInputC={setInputC} handleSubmit={handleSubmit} modal={modal} onClose={handleCloseCurriculumView}/>}
                <button className={styles.addCourseButton} onClick={handleNewCurriculumView}> <FontAwesomeIcon icon={faPlusSquare} /> </button>
                </div>
            </div>
            
            <div className={styles.curriculumBox}>
                {curriculumJSX}
            </div>
            
        </div>

    )
}

export default CurriculumView;