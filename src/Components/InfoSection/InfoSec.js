import React from 'react'
import {Link} from 'react-router-dom'
import {Container,Button} from '../../globalStyle'
import {Info,InfoColumn,InfoRow,TextWrapper,TopLine,Heading,SubTitle,ImgWrapper,Img} from './InfoSec.Elementd'


const InfoSec = ({primary,lightBg,imgStart,lightText,lightTopLine,lightTextDesc,topline,headline,description,buttonLabel,start,img,alt}) => {
    return (
        <>
       <Info lightBg = {lightBg}>
           <Container>
               <InfoRow imgStart = {imgStart}>
                   <InfoColumn>
                       <TextWrapper>
                           <TopLine lightTopLine = {lightTopLine}> {topline} </TopLine>
                           <Heading lightText = {lightText} > {headline} </Heading>
                           <SubTitle lightTextDesc = {lightTextDesc} > {description} </SubTitle>
                           <Link to = '/'>
                               <Button big fontBig primary={primary}>
                                   {buttonLabel}
                               </Button>
                           </Link>
                        </TextWrapper>
                   </InfoColumn>
                   <InfoColumn>
                       <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                       </ImgWrapper>
                   </InfoColumn>
               </InfoRow>
           </Container>
       </Info>
       </>
    )
}

export default InfoSec
