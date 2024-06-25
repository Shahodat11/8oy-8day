import React, { useEffect, useState } from 'react'
import axios from '../../api'


const User = () => {
  const [users, setUsers] = useState(null)
  const userData = JSON.parse(localStorage.getItem("user-data"))
  console.log(userData);
  useEffect(()=>{
    axios
      .get("/users/search", {params: {limit: 1000}})
      .then(res => {
        setUsers(res.data.data.users);
      })
  }, [])

  const deleteUserById = id => {
    axios
      .delete(`/users/${id}`)
  }

  return (
    <div>
      <h1>{userData?.FirstName} : {userData?.role}</h1>
      {
        users?.map(user => (
          <div key={user.id}>
            <h3>{user.FirstName}</h3>
            {
              userData?.role === "owner" ? 
              <button onClick={()=> deleteUserById(user.id)}>delete</button>
              :
              <></>
            }
          </div>
        ))
      }
    </div>
  )
}

export default User