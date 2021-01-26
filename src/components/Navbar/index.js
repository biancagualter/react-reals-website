import React from 'react'
import {Nav, NavContainer, NavLogo} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="/">reals</NavLogo>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
