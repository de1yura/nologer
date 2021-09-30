import React from 'react'
import styles from './NavContainer.module.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import {auth} from '../../container/firebase'
import { useHistory } from 'react-router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)
const NavContainer = (props) => {
const history = useHistory()

  const handleLogOut = () => {

    auth.signOut().then(() => {
  // Sign-out successful.
      alert("You Have Successfully Signed Out")
      history.push('/')
      window.location.reload()
}).catch((error) => { 
  // An error happened.
  alert(error.message)
});
  }

  
  return (
    <div className={styles.navContainer}>
      <NavLink to="/dashboard"><h1>_nologer</h1></NavLink>
      <section className={styles.navElements}>
        <ul>
          <li>
            <NavLink activeClassName = {styles.active} to="/dashboard">Courses</NavLink>
          </li>
          <li>
            <NavLink activeClassName = {styles.active} to="/curriculum">Curriculum</NavLink>
          </li>
          <li>
           <a href="https://github.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'github']}/></a>
        </li>
        <li>
          <a href="https://slack.com/intl/en-gb/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={['fab', 'slack']}/></a>
        </li>
        <li>
          <button onClick={handleLogOut}><FontAwesomeIcon icon={faSignOutAlt} /></button>
        </li>
        </ul>
      </section>
    </div>
  )
}

export default NavContainer