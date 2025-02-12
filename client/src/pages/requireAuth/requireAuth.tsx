import React, { useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import {useNavigate } from 'react-router-dom'


const requireAuth = (ComposedComponent : React.ComponentType<any>) => {
  return () =>  {
    const{isAuthenticated} = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        if(!isAuthenticated){
            navigate('/')
        }
    },[isAuthenticated, navigate])


    return !isAuthenticated ? null : <ComposedComponent/>

  }
}

export default requireAuth