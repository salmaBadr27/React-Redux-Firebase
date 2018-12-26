import urls from "../../routes";

export const handleSignUp = (e, signUp) => {
  e.preventDefault();
  var newUser = {
    fname: e.target.fname.value,
    lname: e.target.lname.value,
    email: e.target.email.value,
    type: e.target.selectType.value
  };
  if (
    newUser.fname === "" ||
    newUser.lname === "" ||
    newUser.email === "" ||
    newUser.type === ""
  ) {
    alert("please fill the form correctly");
  } else {
    signUp(newUser);
  }
};

export const handleLogin = (e, logIn) => {
  e.preventDefault();
  var user = {
    email: e.target.userEmail.value,
  };
  if (user.email === "") {
    alert("please fill the form correctly");
  } else {
    logIn();
  }
};
export const handleLogout = history => {
    if (localStorage.getItem("userType") ) {
      localStorage.removeItem("userType");
      history.push(urls.login);
    }
  };
