import React, { useEffect, useState } from 'react'
import {Nav,NavContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLink,NavBtnLink, Button,NavItemBtn} from "./NavbarElements"
import {FaBars,FaTimes,FaBity} from "react-icons/fa"
import Dropdown from './Dropdown'
// import { Button } from 'react-scroll'


const Navbar = () => {

    const [click,setClick] = useState(false)
    const [button,setButton] = useState(true)
    const [dropdown,setDropdown] = useState(false)


    const showButton = () =>{
        if(window.innerWidth<=768){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(()=>{
        showButton()
    },[])

    window.addEventListener('resize',showButton)

    const handleClick = () => setClick(!click)

    const onMouseEnter = () =>{
        if(window.innerWidth <= 768){
            setDropdown(false)
        }else{
            setDropdown(true)
        }
    }
    const onMouseLeave = () =>{
        if(window.innerWidth <= 768){
            setDropdown(false)
        }else{
            setDropdown(false)
        }
    }

    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to="/"><FaBity/></NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes/>:<FaBars/>}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLink to="/about">ABOUT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/service" >SERVICES </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/pricing">PRICING</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/contact">CONTACT</NavLink>
                        </NavItem>
                        {/* <NavBtn>
                            <NavBtnLink to="signin">SIGNIN</NavBtnLink>
                        </NavBtn> */}
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/signup">
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/signup">
                                    <Button fontBig primary>SIGN UP</Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                    
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
