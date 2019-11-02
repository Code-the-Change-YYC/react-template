import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import styled from "styled-components";

const Header = styled.div`
  background-color: #00bfd8;
  padding: 120px 0px;
  text-align: center;
  font-family: "Raleway";
  font-weight: bold;
  color: white;
  border-bottom: #ff6363 20px solid;
`;



const Title = styled.div`
  font-size: 60px;
`;

const Subtitle = styled.div`
  font-size: 30px;
`;

const Body = styled(Container)`
  padding: 20px 0px;
`

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header>
        <Title>Code the Change YYC</Title>
        <Subtitle>Kickoff 2019</Subtitle>
      </Header>
      <Body>
        <p>
          Welcome to Code the Change Kickoff 2019!
        </p>
        <p>
          This boilerplate site was bootstrapped with Create React App.
        </p>
        <p>
          DevPost link:
        </p>
        <p>
          Slack Channel:
        </p>
      </Body>
    </React.Fragment>
  );
};

function List() {
  return (
    <div>
      <p>Hello! Here's a to-do:</p>
      <ul>
        <li>Handle back-end REST API</li>
        <li>Create simple template</li>
      </ul>
    </div>
  );
}

export default App;
