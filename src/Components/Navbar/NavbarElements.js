import * as React from 'react'
import styled,{css} from 'styled-components'
import {Link as LinkR} from "react-router-dom"
import {Link as LinkS} from "react-scroll"

export const Nav = styled.nav `
    background : #006BA6;
    height: 80px;
    display : flex;
    justify-content: center;
    align-items:center;
    font-size:16px;
    position:sticky;
    top:0;
    z-index:10;

    @media screen and (max-width:960px){
        transition:0.8s all ease;
    }
`

export const NavContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height:80px;
    width:100%;
    max-width:1100px;
    padding:0 24px;
    z-index:1;
`

export const NavLogo = styled(LinkR)`
    color:#E7EFFF;
    display:flex;
    align-items:center;
    text-decoration:none;
    justify-self:flex-start;
    margin-left:24px;
    font-weight:bold;
    font-size:50px;
`
export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width:768px){
        color:#fff;
        display:block;
        position:absolute;
        right:0;
        top:0;
        transform:translate(-100%,60%);
        font-size:28px;
        cursor:pointer;
    }
`

export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
   

    @media screen and (max-width:768px){
        display:flex;
        flex-direction:column;
        width:100%;
        height:90vh;
        position:absolute;
        top:80px;
        left:${({click})=>(click ? 0 : '-100%')};
        opacity:1;
        transition:all 0.5s ease;
        background:#006BA6;
    }
`

export const NavItem = styled.li`
    height:80px;


`

export const NavLink = styled(LinkS)`
    color:#fff;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1rem;
    height:100%;
    cursor:pointer;

    &:active{
        border-bottom:3px solid cyan;
    }
`

export const NavBtn = styled.nav`
    display:flex;
    align-items:center;

    @media screen and (max-width:768px){
        display:none;
    }
`
// export const NavBtnLink = styled(LinkR)`
//     border-radius:50px;
//     background:red;
//     white-space:nowrap;
//     padding:10px 22px;
//     color:cyan;
//     font-size:16px;
//     outline:none;
//     border:none;
//     cursor:pointer;
//     text-decoration:none;
//     transition:all 0.5 ease-in-out;
//     font-weight:600;

//     &:hover{
//         transition:all 0.5 ease-in-out;
//         background:white;
//         color:red;
//     }
// `
export const Button = styled.button`
    border-radius:4px;
    background:${({primary})=>(primary ? '#00BECC' : '#61A8FF')};
    white-space:nowrap;
    padding:${({big})=>(big ? '12px 64px' : '10px 20px')};
    color:#fff;
    font-size:${({fontBig})=>(fontBig) ? '20px' : '16px'};
    outline:none;
    border:none;
    cursor:pointer;

    &:hover{
        transition:all 0.3s ease;
        background:#fff;
        background:${({primary})=>(primary ? '#61A8FF' : '#00BECC')};
    }

    @media screen and (max-width:768px){
        width:100%;
    } 
`

export const NavItemBtn = styled.li`
@media screen and (max-width:768px){
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:120px;
} 
`

export const NavBtnLink = styled(LinkR)`
    display:flex;
    align-items:center;
    justify-content:center;
    text-decoration:none;
    padding:8px 16px;
    width:100%;
    height:100%;
    outline:none;
    border:none;  
`