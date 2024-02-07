import styled from "styled-components";

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