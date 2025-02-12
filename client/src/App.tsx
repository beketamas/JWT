import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import ProfilePage from './pages/ProfilePage'
import TransactionList from './pages/TransactionList'
import { useAuth } from './context/AuthContext'
import requireAuth from './pages/requireAuth/requireAuth'

function App() {

  const{isAuthenticated} = useAuth()

  return(
    <BrowserRouter>
    {!isAuthenticated && <Link to={'/'}>Login</Link>}
    {isAuthenticated && <>
      <Link to={'/profile'}>Profile</Link>|
      <Link to={'/transactions'}>Transactions</Link>
    </>}
        <Routes>
          <Route path='/' Component={Login}></Route>
          <Route path='/profile' Component={requireAuth(ProfilePage)}></Route>
          <Route path='/transactions' Component={requireAuth(TransactionList)}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
