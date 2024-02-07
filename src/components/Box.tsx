import styled from "styled-components";
import {Link} from "./Link";
import {MyAnimation} from "../styles/animations/Animations";

export const Box = styled.div`
  height: 100vh;
  display: flex;  
  justify-content: center;
  align-items: center;
  gap: 40px;
    
    
    button {
        cursor: pointer;
        
    }

    ${Link} {
        cursor: zoom-in;
    }
    
@media screen and (max-width: 800px) {
    flex-direction: column;
}
`