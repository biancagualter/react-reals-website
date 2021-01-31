import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavContainer, NavLogo, NavMenu, NavItem, NavLinks, MobileIcon, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = ({ toggle }) => {
    const[scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavContainer>
                        <NavLogo to="/">reals</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about">Sobre</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="discover">Descubra</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="services">Serviços</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="signup">Cadastre-se</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="signin">Entrar</NavBtnLink>
                        </NavBtn>
                    </NavContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
