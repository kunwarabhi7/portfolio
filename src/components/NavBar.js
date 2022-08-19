import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Reorder } from '@mui/icons-material';
import '../styles/Navbar.css'

const NavBar = () => {
    const [expendNavbar, setExpandbar] = useState(false)

    const toggleNavbar = () => {
        setExpandbar(prev => !(prev))
    }

    const location = useLocation();

    useEffect(() => {
        setExpandbar(false)

    }, [location])

    return (
        <div className='navbar' id={expendNavbar ? 'open' : 'close'}>
            <div className='toggleButton'><button onClick={toggleNavbar}> <Reorder /></button></div>
            <div className='links'>
                <Link to={"/"}>Home </Link>
                <Link to={"/projects"}>Projects </Link>
                <Link to={"/experience"}>Experience </Link>
            </div>
        </div>
    )
}

export default NavBar

