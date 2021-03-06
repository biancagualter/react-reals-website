import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer `
    background: #101522;
`

export const FooterWrap = styled.div `
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div `
    display: flex;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div `
    display: flex;
    margin:  0 150px 0 20px;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinksItems = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1 `
    font-size: 14px;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link) `
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out
    }
`

export const SocialMedia = styled.section `
    max-width: 1020px;
    width: 100%;
`

export const SocialMediaWrap = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link) `
    color: #fff;
    justify-self: start;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    padding: 0 120px 0 20px;
    font-weight: bold;
    cursor: pointer;

    @media screen and (max-width: 820px){
        margin-left: 100px
    }
`

export const WebsiteRights = styled.small `
    color: #fff;

    @media screen and (max-width: 820px){
        margin-top: 10px;
        margin-bottom: 30px;
    }
`

export const SocialIcons = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 248px;
    padding-left: 50px;

    @media screen and (max-width: 820px){
        margin-right: 50px;
    }
`

export const SocialIconLink = styled.a ` 
    color: #fff;
    font-size: 24px;
`