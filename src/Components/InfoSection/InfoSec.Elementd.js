import styled from 'styled-components'
//#5a008a --dark violet
//#101522 --dark deep blue

export const Info = styled.div`
    color:#fff;
    padding:160px 0;
    background:${({lightBg})=>(lightBg ? '#fff' : '#053E7E')}; 
`
export const Container = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    max-width:1100px;
    padding:0 24px;
    z-index:1;
`
export const InfoRow = styled.div`
    display:flex;
    margin:0 -15px -15px -15px;
    flex-wrap:wrap;
    align-items:center;
    flex-direction:${({imgStart})=>(imgStart ? 'row-reverse' : 'row')};
`

export const InfoColumn = styled.div`
    margin-bottom:15px;
    padding-right:15px;
    padding-left:15px;
    flex:1;
    max-width:50%;
    flex-basis:50%;

    @media screen and (max-width:768px){
        diplay:flex;
        max-width:100%;
        flex-basis:100%;
        justify-content:center;
    }
`
export const TextWrapper = styled.div`
    max-width:540px;
    padding-top:0;
    padding-bottom:60px;

    @media screen and (max-width:768px){
        padding-bottom:65px;
    }
`
export const TopLine = styled.div`
    color:${({lightTopLine})=>(lightTopLine ? '#a9b3c1' : '#4b59F7')};
    font-size:18px;
    line-height:16px;
    margin-bottom:16px;
    letter-spacing:1.4px;
`
export const Heading = styled.h1`
    margin-bottom:14px;
    font-size:48px;
    line-height:1.1;
    color:${({lightText})=>(lightText ? '#f7f8fa' : '#1c2237')};
`
export const SubTitle = styled.p`
    max-width:440px;
    font-size:18px;
    margin-bottom:35px;
    line-height:24px;
    color:${({lightTextDesc})=>(lightTextDesc ? '#a9b3c1' : '#1c2237')};
`
export const ImgWrapper = styled.div`
    max-width:555px;
    display:flex;
    justify-content:${({start})=>(start ? 'flex-start' : 'flex-end')};
`
export const Img = styled.img`
    padding-right:0;
    border:0;
    max-width:100%;
    vertical-align:middle;
    display:inblock;
    max-height:500px;
`
