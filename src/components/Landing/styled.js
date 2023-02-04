import styled from 'styled-components'
import PresentationImage from '../../images/presentation.png'
import DefinitionBackground from '../../images/definition.png'
import ContactBackground from '../../images/contact.png'
import { Icon } from "@iconify/react";

export const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
`

export const Header = styled.header`
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:70px;
    width:100%;
    background-color:var(--background);
    box-shadow: 0 0 10px #aaa;
    position: sticky;
    top: 0px;
    z-index:1;

`

export const NavBar = styled.nav`
    display:flex;
    justify-content:space-between;
    width:90%;
`

export const LogoContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`

export const Logo = styled.img`
    width:50px;

    &:hover {
        cursor:pointer;
    }
`

export const ActionItemContainer = styled.div`
    display:flex;
    align-items:center;

    @media (max-width:768px) {
        display:none;
        opacity:0
        transition: opacity ease 0.3s;
        ${props => {
            if(props.active) {
                return `
                    display:flex;
                    position:absolute;
                    top:70px;
                    height:50vh;
                    width:200px;
                    background-color:var(--background);
                    box-shadow: 0px 10px 20px #aaa;
                    flex-direction:column;
                    justify-content:space-around;
                    align-items:center;
                    right:0;
                    z-index:5;
                    gap:21px;
                `
            }
        }}
    }
`

export const ActionItem = styled.a`
    color:var(--primary);
    font-family:'Cuprum', sans-serif;
    font-size:25px;
    text-transform:capitalize;
    text-decoration:none;
    margin:0 10px;
    padding:2px;
    border-bottom:2px solid var(--background);
    display:block;

    &:hover {
        border-bottom:2px solid var(--primary);
        cursor:pointer;
    }
`

export const Hamburguer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    @media (min-width:768px) {
        display:none;
    } 

    &:hover {
        cursor:pointer;
    }
`

export const HamburguerLine = styled.div`
    background-color:var(--primary);
    width:25px;
    height:5px;
    margin:2px 0;
    transition:transform ease 0.3s;

    ${props => {
        if(props.active) {
            if(props.line===1){
                return `
                    transform: rotate(-45deg) translate(-7px, 7px);
                `
            } else if(props.line===2){
                return `
                    opacity:0;
                `
            } else if(props.line===3){
                return `
                    transform: rotate(45deg) translate(-5px, -6px);
                `
            }
        }
    }}
`

export const Button = styled.button`
    font-family:'Cuprum', sans-serif;
    color:white;
    font-size:22px;
    font-weight:'bold';
    background-color:var(--primary);
    padding:7px 25px;
    border:0;
    border-radius:20px;
    /* text-transform:capitalize; */
    transition: transform 0.4s;

    &:hover {
        transform:scale(1.05);
        cursor:pointer;
    }

    ${props => {
        if(props.alignCenter) {
            return `
                align-self:center;
            `
        }
    }}
`

export const SectionTitle = styled.h1`
    font-family:'Cuprum', sans-serif;
    text-transform:capitalize;
    font-size:38px;
    margin:10px 0;
    color:black;
`

export const SectionTitleVariant = styled(SectionTitle)`
    color:white;
    margin:20px 0;
`

export const PresentationSection = styled.main`
    min-height:100vh;
    background-image:url(${PresentationImage});
    background-repeat: no-repeat;
    background-size: cover;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

export const HighlightedText = styled.h1`
    font-family:'Cuprum', sans-serif;
    font-size:72px;
    text-align:uppercase;
    font-weight:normal;
    color:var(--primary);
    text-decoration:underline;
    text-decoration-color: var(--secondary);
    text-decoration-thickness: 5px;
    margin-bottom:25px;

    @media (max-width:768px) {
        font-size:50px;
    } 
`

export const SubText = styled.h2`
    font-family:'Cuprum', sans-serif;
    font-weight:normal;
    font-size:25px;
    max-width:450px;
    color:var(--secondary);
    text-align:center;
    margin-bottom:25px;

    @media (max-width:768px) {
        font-size:23px;
        max-width:70%;
    } 
`

export const DefinitionSection = styled.section`
    background-image:url(${DefinitionBackground});
    background-repeat: no-repeat;
    background-size: cover;
    //min-height:500px;
    padding:100px 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media (max-width:800px) {
        padding:100px 30px;
        /* min-height:550px;  */
    }
`

export const DefinitionText = styled.span`
    font-family:'Cuprum', sans-serif;
    font-size:32px;
    color:white;
    max-width:800px;
    text-align:center;
    margin-bottom:25px;
    text-align:justify;

    @media (max-width:768px) {
        font-size:30px;
    }
`

export const DefinitionList = styled.ul`
    margin-top:30px;
`

export const DefinitionItem = styled.li`
    text-align:justify;
    list-style-type:none;
    margin:15px 0;

    &:before {
        display: inline-block;
        content: "-";
        width: 20px;
        margin-left: 30px;
    }
`

export const Divider = styled.div`
    width:300px;
    height:6px;
    background-color:white;
    margin-bottom:25px;

    @media (max-width:768px) {
        width:220px;
    }
`

export const ContactSection = styled.section`
    background-image:url(${ContactBackground});
    background-repeat: no-repeat;
    background-size: cover;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:80px 0;
`

export const FormContainer = styled.form`
    width:700px;
    display:flex;
    flex-direction:column;
    margin-top:50px;

    @media (max-width:768px) {
        width:80%;
    }
`

export const FormLabel = styled.label`
    font-family:'Cuprum', sans-serif;
    font-size:23px;
    text-transform:capitalize;
`

export const formTextInput = styled.input`
    width:100%;
    border-radius:4px;
    padding:5px 8px;
    font-size:19px;
    font-family:'Cuprum', sans-serif;
    border:2px solid var(--secondary);

    &:active, &:focus {
        outline:0;
    }
`

export const FormItemContainer = styled.div`
    margin-bottom:20px;
    display:flex;
    flex-direction:column;
`

export const messageInput = styled.textarea`
    width:100%;
    border-radius:4px;
    padding:5px 8px;
    font-size:19px;
    font-family:'Cuprum', sans-serif;
    border:2px solid var(--secondary);
    resize: none;

    &:active, &:focus {
        outline:0;
    }
`

export const SupportSection = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:80px 0;
    background-color:white;
`

export const GaragemLogo = styled.img`
    width:300px;
    height:300px;
    margin:25px 0;

    @media (max-width:768px) {
        width:250px;
        height:250px;
    }
`

export const GaragemApoiadores = styled.img`
    @media (max-width:768px) {
        width:100%;
    }
`

export const GaragemApoiadoresContainer = styled.div`
    @media (max-width:768px) {
        width:90%;
    }
`

export const SolutionSection = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:80px 0;
    background-color:var(--background);
`

export const InfoContainer = styled.div`
    width:1200px;
    display:flex;
    justify-content:space-between;
    align-items:baseline;

    @media (max-width:1280px) {
        width:80%;
        flex-direction:column;
        align-items:center;
    }
`

export const InfoCard = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    @media (max-width:1280px) {
        margin-top:50px;
    }
`

export const InfoIconContainer = styled.div`
    border-radius:50%;
    border:4px solid var(--primary);
    width:85px;
    height:85px;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const InfoIcon = styled(Icon)`
    font-size:50px;
    color:var(--primary);
`

export const InfoTitle = styled.span`
    font-family:'Cuprum', sans-serif;
    font-size:32px;
    color:var(--primary);
    text-align:justify;
    font-weight:bold;
    margin-top:10px;
    margin-bottom:20px;
`

export const InfoText = styled.span`
    font-family:'Cuprum', sans-serif;
    font-size:27px;
    color:black;
    text-align:justify;
    max-width:550px;
`

export const Footer = styled.footer`
    display:flex;
    width:100%;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    padding:20px 0;
    background-color:var(--secondary);
`

