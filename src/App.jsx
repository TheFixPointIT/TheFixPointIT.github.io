import { useState } from 'react'


//import firebase modules
import appFirebase from '../src/credentials'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase)

//import own components 
import Login from '../src/components/Login'
import Home from '../src/components/HomePage'

function App() {

  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (fireUser)=>{
    if(fireUser){
      setUser(fireUser)
    }
    else{
      setUser(null)
    }
  })
    
  
  return (
   <div>
    {user ? <Home userEmail = {user.email} /> : <Login/>}
   </div>
  )
}

export default App
