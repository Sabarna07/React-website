import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { FaBity } from 'react-icons/fa'

export const FooterContainer = styled.div`
    background:#101522;
    padding:4rem 0 2rem 0;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
export const FooterSubscription = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:24px;
    margin-bottom:24px;
    color:#fff;
`
export const FooterSubHeading = styled.p`
    font-size:24px;
    margin-bottom:24px;
`
export const FooterSubText = styled.p`
    font-size:20px;
    margin-bottom:24px;
`
export const Form = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    @media screen and (max-width:820px){
        flex-direction:column;
        width:80%;
    }
`
export const FormInput = styled.input`
    padding:10px 20px;
    font-size:20px;
    border:none
    outline:none;
    border-radius:2px;
    margin-right:10px;
    border:1px solid #fff;

    &::placeholder{
        color:#242424;
    }
    @media screen and (max-width:820px){
        width:100%;
        margin:0 0 16px 0;
    }
`
export const FooterLinksContainer = styled.div`
    width:100%;
    max-width:1000px;
    display:flex;
    justify-content:center;

    @media screen and (max-width:820px){
        padding-top:32px;
    }
`
export const FooterLinksWrapper = styled.div`
    display:flex;

    @media screen and (max-width:820px){
        flex-direction:column;
    }
`
export const FooterLinksItems = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin:16px;
    text-align:left;
    box-sizing:border-box;
    color:#fff;
    width:160px;

    @media screen and (max-width:420px){
        width:100%;
        margin:0;
        padding:10px;
    }
`
export const FooterLinksTitle = styled.h2`
    margin-bottom:16px;
`
export const FooterLink = styled(Link)`
    text-decoration:none;
    margin-bottom:8px;
    color:#fff;

    &:hover{
        color:#0467fb;
        transition:0.4s ease-out;
    }
`
export const SocialMedia = styled.div`
    width:100%;
    max-width:1000px;
`
export const SocialMediaWrapper = styled.div`
    display:flex;
    align-items:center;
    width:90%;
    max-width:1000px;
    justify-content:space-between;
    margin:40px auto 0 auto;
    
    @media screen and (max-width:840px){
        flex-direction:column;
    }
`
export const SocialLogo = styled(Link)`
    color:#fff;
    display:flex;
    justify-self:start;
    align-items:center;
    cursor:pointer;
    text-decoration:none;
    margin-bottom:16px;
    font-size:2.5rem;
`
export const SocialIcon = styled(FaBity)`
    margin-right:10px;
`
export const SocialIcons = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:240px;
    `
    export const SocialIconsLinks = styled.a`
    color:#fff;
    font-size:24px;
    Cursor:pointer;
`
export const WebsiteRights = styled.div`
    color:#fff;
    margin-bottom:16px;
`

