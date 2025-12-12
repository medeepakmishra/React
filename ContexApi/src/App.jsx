
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContext from './contex/UserContex'
import UserContextProvider from './contex/UserContextProvider'

function App() {
 
  return (
   <UserContextProvider>
  <h1>HI this is deepak mishra</h1>
  <Login/>
  <Profile/>
   </UserContextProvider>
  )
}

export default App
