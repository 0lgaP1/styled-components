import React from 'react';
import './App.css';
import styled from "styled-components";
import {Link} from "./components/Link";
import {StyledBtn} from "./components/StyledBtn";
import {Box} from "./components/Box";
import {Menu} from "./components/Menu";

function App() {
  return (
      <div className="App">
        <Menu>
            <ul>
                <li><a href="">menu item 1</a></li>
                <li><a href="">menu item 2</a></li>
                <li><a href="">menu item 3</a></li>
            </ul>
        </Menu>
        <Box>
              <StyledBtn as={Link} href={"#"}>LinkComponent</StyledBtn>
              <StyledBtn as="a" href={"#"}>Link</StyledBtn>
              <StyledBtn>HELLO</StyledBtn>
              <SuperBtn>Super HELLO</SuperBtn>
        </Box>
      </div>

  );
}

export default App;

const SuperBtn = styled(StyledBtn)`
    background-color: aqua;
    border-radius: 10px;
    color: darkslategrey;
`

