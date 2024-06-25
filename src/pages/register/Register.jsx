import React from 'react'
import { useGetInputValue } from '../../hooks/useGetInputValue'
import axios from '../../api'

const initialState = {
  UserName: "",
  password: "",
  FirstName: "",
  LastName: "",
  phones: "",
}

const Register = () => {
  const {formData,handleChange} = useGetInputValue(initialState)

  const handleCreateUser = e => {
    e.preventDefault()
    formData.phones = [formData.phones]
    axios
      .post("/auth/user/sign-up", formData)
  }
  return (
    <form onSubmit={handleCreateUser}>
      <h2>Register</h2>
      <input value={formData.UserName} onChange={handleChange} name='UserName' type="text" />
      <input value={formData.password} onChange={handleChange} name='password' type="text" />
      <input value={formData.FirstName} onChange={handleChange} name='FirstName' type="text" />
      <input value={formData.LastName} onChange={handleChange} name='LastName' type="text" />
      <input value={formData.phones} onChange={handleChange} name='phones' type="number" />
      <button>create</button>
    </form>
  )
}

export default Register