import styled from "styled-components";
import { MyAnimation } from "../styles/animations/Animations";

export const StyledBtn = styled.button`
    border: none;
    background-color: #fb3f78;
    padding: 10px 20px;
    color: snow;
    font-size: 2rem;
    font-weight: bold;

    &:hover {
        background-color: #a1b433;
    }

    &:last-child {
        background-color: chocolate;
    }
`
export const SuperBtn = styled(StyledBtn)`
    background-color: aqua;
    border-radius: 10px;
    color: darkslategrey;
    &:hover {
        animation: ${MyAnimation} 2s ease-in-out infinite;
    }
`