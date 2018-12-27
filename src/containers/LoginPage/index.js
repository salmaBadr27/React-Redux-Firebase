import React from "react";
import { LoginFields, SignUpFields } from "./constants";
import { signUp, logIn } from "../../redux-modules/users/actions";
import Form from "../../components/Form";
import styled from "styled-components";
import { handleSignUp, handleLogin } from "./helpers";
import { connect } from "react-redux";
import urls from "../../routes";

const Container = styled.div`
  background: rgba(58, 63, 68, 0.5);
  border-radius: 5px;
  box-shadow: 0 1.5px 0 0 rgba(0, 0, 0, 0.1);
  width: 450px;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  color: #ffff;
  padding: 25px 25px 0;
  margin: 20px 20px 0;
  border-radius: 3px;
`;
const Logo = styled.div`
  font-family: "museo-slab";
  font-size: 30px;
  text-align: center;
  padding: 20px 20px 0;
  margin: 0;
  color: #fff;
`;

class LoginPage extends React.Component {
  componentWillReceiveProps(nextProps) {
    var loggedUserType = nextProps.loggedUser.data.type;
    if (
      nextProps.loggedUser.data &&
      nextProps.loggedUser.data !== this.props.loggedUser.data
    ) {
      if (!nextProps.loggedUser.error) {
        if (loggedUserType === "student") {
          localStorage.setItem("userType", loggedUserType);
          this.props.history.push(urls.student);
        }
        if (loggedUserType === "teacher") {
          localStorage.setItem("userType", loggedUserType);
          this.props.history.push(urls.teacher);
        }
      }
    }
    if (nextProps.loggedUser.error) {
      alert(nextProps.loggedUser.error);
    }
    if (
      nextProps.newUser.data &&
      nextProps.newUser.data !== this.props.newUser.data
    ) {
      if (!nextProps.newUser.error) {
        alert("signedup succefully.. ! sign in to see your component !");
      }
    }
    if (nextProps.newUser.error) {
      alert(nextProps.newUser.error);
    }
  }
  render() {
    return (
      <Container>
        <Logo>Get Connected ToGether !</Logo>
        <Content>
          <Form
            id="login"
            onSubmit={e => handleLogin(e, this.props.logIn)}
            fields={LoginFields}
            label="Login"
            title="login"
          />
          <hr />
          <Form
            id="signup"
            onSubmit={e => handleSignUp(e, this.props.signUp)}
            fields={SignUpFields}
            label="SignUp"
            title="Sign Up"
          />
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = globalState => ({
  loggedUser: globalState.usersReducer.login,
  newUser: globalState.usersReducer.signup
});
const mapDispatchToProps = dispatch => ({
  logIn: payload => dispatch(logIn(payload)),
  signUp: payload => dispatch(signUp(payload))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
