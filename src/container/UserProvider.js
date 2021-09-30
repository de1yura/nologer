import React, {createContext, useState} from 'react';
import UserLogin from '../components/UserLogin';
import UserSignUp from "../components/UserLogin";


export const UserContext = createContext({});

export const UserProvider = (props) => {
  
  const [user, setUser] = useState("");
  
  const data = {
    user: user,
    setUser: setUser
}

  return (
    <UserContext.Provider value ={data}>
     {
       props.children
     }
    </UserContext.Provider>
  )
}



export default UserProvider;
