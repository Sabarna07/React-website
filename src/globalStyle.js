import styled,{createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        padding:0;
        margin:0;
        font-family:sans-serif;
    }
`;

export const Container = styled.div`
    z-index:1;
    max-width:1300px;
    width:100%;
    margin-right:auto;
    margin-left:auto;
    padding-right:50px;
    padding-left:50px;

    @media screen and (max-width:991px){
        padding-left:30px;
        padding-right:30px;
    }
`

export const Button = styled.button`
    border-radius:4px;
    background:${({primary})=>(primary ? '#FF8BD4' : '#7A5CAB')};
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
        background:${({primary})=>(primary ? '#7A5CAB' : '#FF8BD4')};
    }       

    @media screen and (max-width:768px){
        width:100%;
    } 
`

export default GlobalStyle