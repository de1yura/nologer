import dummyData from './Assets/dummydata';
import UserLogin from './components/UserLogin/UserLogin';
import UserSignUp from './components/UserSignUp/UserSignUp';
import UserProvider from './container/UserProvider';
//import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { firestore } from './container/firebase';
import { useState, useEffect } from 'react';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import Courses from './containers/Courses';
import CourseList from './components/CourseList';
import Curriculum from './containers/Curriculum';
import Schedule from "./containers/Schedule";
import NavContainer from './containers/NavContainer';
import EditCourse from './containers/EditCourse';
import CreateNewCourse from './containers/CreateNewCourse'
import ModuleList from './components/ModuleList';
import { findRenderedComponentWithType } from 'react-dom/cjs/react-dom-test-utils.production.min';





const App = () => {
  //----------FIRESTORE ACCESS----------//
  //To use Firestore:
  // - run firestore.collection("") with courses, curriculums or modules in the speech  marks.
  // - if you want to retrieve an entire collection to display, use .get().then(retrievedData => setState(retrievedData.docs.map(retrievedData => retrievedData.data())))
  // - if you want to retrieve or modify one document, use .doc() and specify the document ID. then use set(), get().then(), update() or delete() as necessary.

  //--COURSES.JSX--
  const [courseData, setCourseData] = useState([]);
  const getCourses = () => {
    return firestore.collection("courses").get().then(
      courses => setCourseData(courses.docs.map(
        courses => courses.data()
      )
      )
   );
  }
  useEffect(() => {
    getCourses();
  }, [])
  //------//



  return (
    <Router>
      <UserProvider>
        <Switch>
          <Route exact path="/">
            <UserLogin />
          </Route>

          <Route exact path="/signup">
            <UserSignUp />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>


          <Route path="/Dashboard">
            <Dashboard firestoreData={courseData}/>
          </Route>
          {/* <Route path="/Courses">
            <CourseList />
          </Route>
          <Route path="/Curriculum">
            <Curriculum />
          </Route> */}
          <Route path="/CreateNewCourse">
            <CreateNewCourse />
          </Route>
          <Route path="/EditCourse">
            <EditCourse />
          </Route>

          <Route path="/Curriculum">
            <Curriculum />
          </Route>

        </Switch>
      </UserProvider>
    </Router>

  );
}

export default App;
