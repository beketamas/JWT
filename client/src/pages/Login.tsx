import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const{login} = useAuth()

  const handleUsername = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }
  const handlePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const hadnleLogin = async() => {

    try {
      const res = await fetch('http://localhost:3000/login', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({username,password})
      })

      if (!res.ok) {
        throw new Error
      }
      const data = await res.json()
      if (data.success) {
        login(data.token)
      }
      
    } catch (error) {
      console.error(error)
    }
  }

  const handleGetInfo = async() => {

    try {
      const token = localStorage.getItem('token')
      const res = await fetch(`http://localhost:3000/accounts/${username}`,{
        headers:{
          'Authorization':`Bearer ${token}`
        }
      })
      if (!res.ok) {
        throw new Error
      }
      const data = await res.json()
      console.log(data)
      
    } catch (error) {
      console.error(error)
    }

  }

  return (
    <>
      <div>
        <input value={username} onChange={handleUsername} type='text' placeholder='username'></input>
        <input value={password} onChange={handlePassword} type='password' placeholder='password'></input>
        <input type="button" value='Login' onClick={hadnleLogin} />
        <button onClick={handleGetInfo}>Get Info</button>
      </div>
    </>
  )
}

export default Login