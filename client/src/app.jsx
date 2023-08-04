import React from 'react'

// Importing CSS
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// Importing Components
import Home from './Components/Home/Home'
import NavbarMain from './Components/Navbar/Navbar'
import Search from './Components/Search/search'
const App= () => {
    return(
        <div>
            <NavbarMain/>
            <Home/>
            <Search />
        </div>
    )
}

export default App