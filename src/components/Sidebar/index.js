import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon />
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLink to='sobre' onClick={toggle}>Sobre</SidebarLink>
                   <SidebarLink to='descubra' onClick={toggle}>Descubra</SidebarLink>
                   <SidebarLink to='servicos' onClick={toggle}>Serviços</SidebarLink>
                   <SidebarLink to='signup' onClick={toggle}>Cadastre-se</SidebarLink>
               </SidebarMenu>
               <SideBtnWrap>
                   <SidebarRoute to='/signin'>Entrar</SidebarRoute>
               </SideBtnWrap>
           </SidebarWrapper>
       </SidebarContainer>
    )
}

export default Sidebar
