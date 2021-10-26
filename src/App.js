import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import { Route } from "react-router";
import Landing from "./components/Landing";
import UNSDPage from "./components/UNSDPage";
import Header from "./components/Header";

const Body = styled(Container)`
  padding: 20px 0px;
`

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Body>
        <Route exact path="/" component={Landing} />
        <Route path="/unsd" component={UNSDPage} />
      </Body>
    </React.Fragment>
  );
};

export default App;
