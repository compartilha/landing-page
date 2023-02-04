import { Icon } from "@iconify/react";
import styled from "styled-components";

export const Container = styled.div`
    align-self:center;
    display:flex;
    flex-direction:column;
    background-color:red;
    align-items:center;
    justify-content:center;
    height:100%;
    width:100%;
    background-color: var(--background);

    @media (max-width:768px) {
        padding:50px 0;
    }
` 

export const TitleContainer = styled.div`
    width:100%;

    @media (max-width:999px) {
        padding:0 20px;
    }

    @media (max-width:768px) {
        display:none;
    }

`

export const Title = styled.h1`
    font-family:'Cuprum', sans-serif;
    text-align:center;

    @media (max-width:768px) {
        font-size:25px;
        margin-top:20px;
    } 
`

export const Logo = styled.img`
    width:100px;
    margin-top:25px;

    @media (max-width:768px) {
        width:75px;
    } 
`

export const FormContainer = styled.form`
    background-color:white;
    padding:25px 50px;
    border: 2px solid var(--secondary);
    border-radius:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:500px;

    @media (max-width:568px) {
        width:90%;
        padding:25px 10px;
    }   

`

export const FormTitle = styled.h1`
    font-family:'Cuprum', sans-serif;
    color: black;
    font-weight:400;
    font-size:34px;
    margin-bottom:10px;
    text-align:center;

`

export const FormSubTitle = styled.h3`
    font-family:'Puritan', sans-serif;
    font-size:18px;
    color:var(--secondary);
    font-weight:normal;
    margin-bottom:10px;
`

export const UserSelectorContainer = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    width:400px;
    margin-bottom:20px;
    text-align:center;

    @media (max-width:768px) {
        width:100%;
        //justify-content:space-between;
    }
`

export const UserSelector = styled.div`
    border:${props => props.selected ? "2px solid var(--primary)" : "2px solid var(--secondary)"};
    border-radius:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:120px;
    transition:transform 0.4s;

    &:hover {
        transform:scale(1.1);
        cursor: pointer;
    }
`

export const UserSelectorIcon = styled(Icon)`
    font-size:50px;
    color:var(--secondary);
    margin:5px 0;
`

export const UserSelectorName = styled.span`
    font-family:'Cuprum', sans-serif;
    color:black;
    font-size:22px;
    width:100px;

    @media (max-width:768px) {
        width:100%;
        break
        //justify-content:space-between;
    }
`

export const FormInput = styled.input`
    font-family:'Puritan', sans-serif;
    color:var(--secondary);
    border:1px solid var(--secondary);
    width:100%;
    border-radius:10px;
    font-size:24px;
    padding:10px 0;
    padding-left:10px;
    margin-bottom:20px;

    &::placeholder {
        font-weight:'bold';
        color: var(--secondary);
    }

    &:active, &:focus {
        outline:0;
        border:1px solid var(--primary);
    }
`

export const FormButton = styled.button`
    font-family:'Cuprum', sans-serif;
    color:white;
    font-size:25px;
    font-weight:'bold';
    background-color:var(--primary);
    width:100%;
    padding:10px 15px;
    border:0;
    border-radius:10px;
    text-transform:uppercase;
    transition: transform 0.4s;

    &:hover {
        transform:scale(1.05);
        cursor:pointer;
    }
`

export const ErrorContainer = styled.div`
    padding:10px 15px;
    background-color:#ffaaaa;
    border-radius:10px;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:20px;

`

export const ErrorLogo = styled(Icon)`
    font-size:27px;
    color:var(--background);
`

export const ErrorMessage = styled.span`
    text-transform:uppercase;
    font-family:'Cuprum', sans-serif;
    color:var(--background);
    font-size:20px;
    margin-left:10px;

`


