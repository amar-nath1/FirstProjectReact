import React,{useState} from 'react';
import AddUser from './Components/Users/AddUser';

import UsersList from './Components/Users/UsersList';

function App() {

  const [usersList,setUsersList]=useState([])

const getUserDataHandler=(uName,uAge,uCollegeName)=>{

  setUsersList((prev)=>{

    return [...prev,{id:Math.random().toString(),name:uName,age:uAge,college:uCollegeName}]

  })

}

  return (
    <div>
      <AddUser onGetUserData={getUserDataHandler}></AddUser>
    <UsersList users={usersList}/>

    </div>
  );
}

export default App;
