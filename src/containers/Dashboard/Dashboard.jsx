import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import { firestore } from "../../container/firebase";
import styles from "./Dashboard.module.scss";
import NavContainer from "../NavContainer";
import Courses from "../Courses";
import Curriculum from '../Curriculum/Curriculum';

const Dashboard = (props) => {
 
  const firestoreData = props.firestoreData;

  return (
    
        <div className={styles.dashboard}>
          <div className={styles.dashboardNav}>
            <NavContainer />   
          </div>

            <Route exact path="/dashboard">
              <div className={styles.dashboardCourseOverview}>
                <Courses firestoreData={firestoreData}/>
              </div>
            </Route>
            <Route path="/curriculum">
              <div className={styles.dashboardCourseOverview}>
                <Curriculum />
              </div>
            </Route>
            
            
          

        </div>
      
    )
  }

export default Dashboard