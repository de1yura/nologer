import React, { history } from 'react'
import styles from './UserSignUp.module.scss'
import {
  BrowserRouter as Router,
  Link,
  useHistory, 
} from "react-router-dom";
import {auth} from '../../container/firebase';



const UserSignUp = (props) => {

const history = useHistory();

const handleSubmit = (e) => {
  e.preventDefault();

  
  const email = e.target[1].value;

  const password = e.target[3].value;
 
  

  auth.createUserWithEmailAndPassword( email, password).then(response => {
    history.push("/");;
  })
  console.log("Working");
}






  return (
    //User sign up page
    <>
    <div className = {styles.signup}>
      <h1>_nologer</h1>
      <div className= {styles.content}>
    <h2>Create an account</h2>
    <form onSubmit={handleSubmit}>
      {/* Name section*/}
      <div>
      <p>Full Name:</p>
    <label>
      <input className = {styles.name} type="text" name="name" placeholder="Barry"/>
    </label>
    </div>

       {/* Email section*/}
    <div>
    <p>Email:</p>
    <label>
      <input className = {styles.email}type="text" name="email" placeholder="bigbaz@nology.io"/>
    </label>
    </div>

     {/* Username section*/}
    <div>
    <p>Username:</p>
    <label>
      <input className = {styles.userName} type="text" name="username" placeholder="Bazzer" />
    </label>
    </div>

     {/* Password section*/}
    <div>
    <p>Password:</p>
    <label>
      <input className = {styles.pass} type="password" name="password" placeholder="*******" />
    </label>
    </div>

    {/*Confirm Password section*/}
    <div>
    <p>Confirm Password:</p>
    <label>
       <input className = {styles.confirm} type="password" name="confirm" placeholder="*******"  />
    </label>
    </div>

    {/*Signup button*/}
    
    <input className = {styles.btn} type="submit" value="Sign Up" />
   
  </form>
 
  </div> 
  
  </div>
  </>
  //input a back to login link
  )
}

export default UserSignUp
