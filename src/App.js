import React from "react";
import "./App.css";

import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Welcome from "./components/Welcome";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import EditProfile from "./components/EditProfile";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const heading = "Welcome to TRIP SHARE";
  const quote =
    "Good friends, good cars, and a footpath: this is the ideal life.";
  const footer = "sallu bhai";

  return (
    <Router>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} className={"margin-top"}>
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={Login} />
              <Route path="/logout" exact component={Login} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/editProfile" exact component={EditProfile} />
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}
