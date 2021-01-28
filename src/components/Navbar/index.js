import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavContainer, NavLogo, NavMenu, NavItem, NavLinks, MobileIcon, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to='/'>reals</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='sobre'>Sobre</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='descubra'>Descubra</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='servicos'>Serviços</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'>Cadastre-se</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Entrar</NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
