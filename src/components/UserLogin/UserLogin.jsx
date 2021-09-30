import React, { useState, useContext } from "react";
import styles from "./UserLogin.module.scss";
import { auth } from "../../container/firebase";
import { UserContext } from "../../container/UserProvider";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";

const UserLogin = (props) => {
  const history = useHistory();
  const userContext = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        userContext.setUser(response.user.email);
        history.push("/Dashboard");
      })
      .catch((e) => {
        alert("Sorry something went wrong");
      });
  };

  return (
    //User login page
    <>
      <div className={styles.login}>
        <h1 className={styles.nologer}>_nologer</h1>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>Welcome!</h2>
            <h2>Let's get you logged in...</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={styles.userInput}>
              <label>Email:</label>
              <input
                className={styles.user}
                type="email"
                name="email"
                placeholder="email"
              />
              <label>Password:</label>
              <input
                className={styles.password}
                type="password"
                name="password"
                placeholder="*******"
              />
            </div>
            <div className={styles.buttons}>
              <input className={styles.btn} type="submit" value="Login" />
              <form action="/signup">
                <input className={styles.btn} type="submit" value="Sign Up" />
              </form>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

//need to act correct href once domain name established

export default UserLogin;
