import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = () => {
    return (
       <SidebarContainer>
           <Icon>
               <CloseIcon />
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLink to='sobre'>Sobre</SidebarLink>
                   <SidebarLink to='descubra'>Descubra</SidebarLink>
                   <SidebarLink to='servicos'>Serviços</SidebarLink>
                   <SidebarLink to='signup'>Cadastre-se</SidebarLink>
               </SidebarMenu>
               <SideBtnWrap>
                   <SidebarRoute to='/signin'>Entrar</SidebarRoute>
               </SideBtnWrap>
           </SidebarWrapper>
       </SidebarContainer>
    )
}

export default Sidebar
