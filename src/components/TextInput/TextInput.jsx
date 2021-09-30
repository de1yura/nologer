import React from 'react';
import styles from "./TextInput.module.scss";



const TextInput = (props) => {

  //----- PROPS USED FOR TESTING in APP.jsx ----------//
  // const [ input, setInput ] = useState("");

  // const handleInput = (e) => {
  //   const newInput = e.target.value;
  //   setInput(newInput)
  // }

  // const handleClick = () => {
  //   console.log(input);
  // }
  //----------------

  //Assume as text input props will be required - value={value} and onChange={changed}

  const { value, changed } = props




  return (
  
    <div className={styles.textInput}>

      <label htmlFor="textInput">Label</label>
      <input type="text" id="textInput" value={value} onChange={changed} required />
      
      
    </div>


  )
}

export default TextInput
