import React from 'react'

// Importing CSS
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// Importing Components
import Home from './Components/Home/Home'
import NavbarMain from './Components/Navbar/Navbar'

const App= () => {
    return(
        <div>
            <NavbarMain/>
            <Home/>
        </div>
    )
}

export default App