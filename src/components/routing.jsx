import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Home from './home'
import About from './about'

export default function Routing () {

    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/about" Component={About}/>
                        
                    <Route path="/" Component={Home}/>
                        
                    
                </Routes>
            </div>
        </Router>
    )
}
