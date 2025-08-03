import './App.css'
import Background from './components/Background_login_signup'
import Login from './Login'
import Signup from './Signup'
import { Route, Routes } from 'react-router-dom'
import Welcome from './Welcome'
import Home from './Home'
import AddCard from './AddCard'
import SharedBrain from './SharedBrain'

function App() {
  return(
    
    <Routes>
      <Route path="/" element={<Welcome/>} />
      <Route path="/signup" element={Background({children: <Signup />})} />
      <Route path="/login" element={Background({children: <Login />})} />
      <Route path="/addCard" element={<AddCard/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/share/:hash" element={<SharedBrain/>} />
    </Routes>
  ) 
}

export default App
