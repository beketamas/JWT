import { useEffect } from "react"

const TransactionList = () => {


  const handleGetInfo = async() => {

    try {
      const username = localStorage.getItem('user')
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

  useEffect(() => {
    handleGetInfo()
  },[])
  
  return (
    <div>TransactionList</div>
  )
}

export default TransactionList