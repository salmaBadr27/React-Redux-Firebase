import React from "react";
import { LoginFields, SignUpFields } from "./constants";
import { signUp, logIn } from "../../redux-modules/users/actions";
import Form from "../../components/Form";
import { Section, Heading } from "react-bulma-components/full";
import styled from "styled-components";
import { handleSignUp, handleLogin } from "./helpers";
import { connect } from "react-redux";
import urls from "../../routes";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

class LoginPage extends React.Component {
  componentWillReceiveProps(nextProps) {
    var newuserType = nextProps.newUser.data.type;
    var loggeduser = nextProps.loggedUser.data;
    if (nextProps.loggedUser.data) {
      localStorage.setItem("token", loggeduser.idToken);
    }
    if (nextProps.newUser.data) {
      if (
        !nextProps.newUser.error &&
        nextProps.newUser.data.type === "student"
      ) {
        localStorage.setItem("userType", newuserType);
        this.props.history.push(urls.student);
      } else if (
        !nextProps.newUser.error &&
        nextProps.newUser.data.type === "teacher"
      ) {
        localStorage.setItem("userType", newuserType);
        this.props.history.push(urls.teacher);
      }
    }
  }
  render() {
    return (
      <Container>
        <br />
        <Heading>Get Connected With Each Other !</Heading>
        <Content>
          <Section>
            <Form
              id="login"
              onSubmit={e => handleLogin(e, this.props.logIn)}
              fields={LoginFields}
              label="Login"
              title="login"
            />
          </Section>
          <Section>
            <Form
              id="signup"
              onSubmit={e => handleSignUp(e, this.props.signUp)}
              fields={SignUpFields}
              label="SignUp"
              title="Sign Up"
            />
          </Section>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = globalState => ({
  newUser: globalState.usersReducer.signup,
  loggedUser: globalState.usersReducer.login
});
const mapDispatchToProps = dispatch => ({
  signUp: payload => dispatch(signUp(payload)),
  logIn: payload => dispatch(logIn())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
