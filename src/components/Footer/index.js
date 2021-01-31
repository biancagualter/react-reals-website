import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, SocialMedia } from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Sobre nós</FooterLinkTitle>
                            <FooterLink to="/signin">Quem somos</FooterLink> 
                            <FooterLink to="/signin">Como funciona</FooterLink> 
                            <FooterLink to="/signin">Avaliações</FooterLink> 
                            <FooterLink to="/signin">Carreiras</FooterLink> 
                            <FooterLink to="/signin">Investidores</FooterLink> 
                            <FooterLink to="/signin">Termos de Serviço</FooterLink> 
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Fale Conosco</FooterLinkTitle>
                            <FooterLink to="/signin">Chat Online</FooterLink> 
                            <FooterLink to="/signin">E-mail</FooterLink> 
                            <FooterLink to="/signin">Telefones</FooterLink> 
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>reals</SocialLogo>
                        <WebsiteRights>reals © {new Date().getFullYear()} Todos os direitos reservados.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                            <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                            <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                            <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com" target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
