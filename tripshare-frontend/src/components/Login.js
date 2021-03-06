import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  FormControl,
  Button,
  Alert,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faEnvelope,
  faLock,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { authenticateUser } from "../services/auth/index";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  initialState = {
    email: "",
    password: "",
    error: "",
  };

  componentDidMount() {
    delete localStorage.jwtToken;
  }

  credentialChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validateUser = () => {
    this.props.authenticateUser(this.state.email, this.state.password);
    setTimeout(() => {
      if (this.props.auth.isLoggedIn) {
        return this.props.history.push("/dashboard");
      } else {
        this.resetLoginForm();
        localStorage.removeItem("jwtToken");
        this.setState({ error: "Invalid email and password" });
      }
    }, 5000);
  };

  resetLoginForm = () => {
    this.setState(() => this.initialState);
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("newtripId");
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <Row className="justify-content-md-center mt-2">
        <Col xs={5}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Card className={"transparent border-dark bg-dark text-white"}>
            <Card.Header className="mb-3 mt-3">
              <h2>
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </h2>
            </Card.Header>
            <Card.Body className=" mb-3 mt-3">
              <Form.Row>
                <Form.Group as={Col}>
                  <InputGroup className="mb-3 ">
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      required
                      autoComplete="off"
                      type="text"
                      name="email"
                      size="md"
                      value={email}
                      onChange={this.credentialChange}
                      className={"bg-white text-dark"}
                      placeholder="Enter Email Address"
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faLock} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      required
                      autoComplete="off"
                      type="password"
                      name="password"
                      size="md"
                      value={password}
                      onChange={this.credentialChange}
                      className={"bg-white text-dark"}
                      placeholder="Enter Password"
                    />
                  </InputGroup>
                </Form.Group>
              </Form.Row>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
              <Button
                className="mb-1 mt-1"
                size="md"
                type="button"
                variant="success"
                onClick={this.validateUser}
                disabled={
                  this.state.email.length === 0 ||
                  this.state.password.length === 0
                }
              >
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </Button>{" "}
              <Button
                size="md"
                type="button"
                variant="info"
                onClick={this.resetLoginForm}
                disabled={
                  this.state.email.length === 0 &&
                  this.state.password.length === 0 &&
                  this.state.error.length === 0
                }
              >
                <FontAwesomeIcon icon={faUndo} /> Reset
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: (email, password) =>
      dispatch(authenticateUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
