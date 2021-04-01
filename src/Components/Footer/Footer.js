import React from 'react'
import {FooterContainer,FooterSubscription,FooterSubHeading,FooterSubText,Form,FormInput,
    FooterLinksContainer,FooterLinksWrapper,FooterLinksItems,FooterLink,FooterLinksTitle,
    SocialMedia,SocialMediaWrapper,SocialLogo,SocialIcon,SocialIcons,SocialIconsLinks,WebsiteRights
} from './Footer.elements'
import {FaFacebookF,FaInstagram,FaTwitter,FaYoutube,FaLinkedin} from 'react-icons/fa'
import {Button} from "../../globalStyle"

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>Join our exclusive membership to receive latest news on time</FooterSubHeading>
                <FooterSubText>You can unsubscribe at any time</FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email"/>
                        <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>About Us</FooterLinksTitle>
                        <FooterLink>How it works</FooterLink>
                        <FooterLink>Testimonials</FooterLink>
                        <FooterLink>Careers</FooterLink>
                        <FooterLink>Investors</FooterLink>
                        <FooterLink>Terms of services</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinksTitle>Contact Us</FooterLinksTitle>
                        <FooterLink>How it works</FooterLink>
                        <FooterLink>Testimonials</FooterLink>
                        <FooterLink>Careers</FooterLink>
                        <FooterLink>Investors</FooterLink>
                        <FooterLink>Terms of services</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>

                    <FooterLinksItems>
                        <FooterLinksTitle>Videos</FooterLinksTitle>
                        <FooterLink>How it works</FooterLink>
                        <FooterLink>Testimonials</FooterLink>
                        <FooterLink>Careers</FooterLink>
                        <FooterLink>Investors</FooterLink>
                        <FooterLink>Terms of services</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinksTitle>Social Media</FooterLinksTitle>
                        <FooterLink>How it works</FooterLink>
                        <FooterLink>Testimonials</FooterLink>
                        <FooterLink>Careers</FooterLink>
                        <FooterLink>Investors</FooterLink>
                        <FooterLink>Terms of services</FooterLink>
                    </FooterLinksItems>

                </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrapper>
                    <SocialLogo>
                        <SocialIcon/>
                    </SocialLogo>
                    <WebsiteRights>Copyrights 2021</WebsiteRights>
                    <SocialIcons>
                        <SocialIconsLinks to="/signup">
                            <FaFacebookF/>
                        </SocialIconsLinks>

                        <SocialIconsLinks to="/signup">
                            <FaInstagram/>
                        </SocialIconsLinks>

                        <SocialIconsLinks to="/signup">
                            <FaTwitter/>
                        </SocialIconsLinks>

                        <SocialIconsLinks to="/signup">
                            <FaYoutube/>
                        </SocialIconsLinks>

                        <SocialIconsLinks to="/signup">
                            <FaLinkedin/>
                        </SocialIconsLinks>

                    </SocialIcons>
                </SocialMediaWrapper>
            </SocialMedia>

        </FooterContainer>
    )
}

export default Footer
