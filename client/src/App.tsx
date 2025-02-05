import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import ProfilePage from './pages/ProfilePage'
import TransactionList from './pages/TransactionList'

function App() {
  return(
    <BrowserRouter>
    <Link to={'/'}>Login</Link>|
    <Link to={'/profile'}>Profile</Link>|
    <Link to={'/transactions'}>Transactions</Link>
        <Routes>
          <Route path='/' Component={Login}></Route>
          <Route path='/profile' Component={ProfilePage}></Route>
          <Route path='/transactions' Component={TransactionList}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
