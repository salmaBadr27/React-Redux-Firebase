import urls from "../../routes";

export const handleSignUp = (e, signUp) => {
  e.preventDefault();
  var newUser = {
    email: e.target.email.value,
    password: e.target.password.value
  };
  if (newUser.email === "" || newUser.password === "") {
    alert("please fill the form correctly");
  } else {
    signUp(newUser);
  }
};

export const handleLogin = (e, logIn) => {
  e.preventDefault();
  var user = {
    email: e.target.userEmail.value,
    password: e.target.pass.value,
    type: e.target.selectType.value
  };
  if (user.email === "" || user.password === "" || user.type === "") {
    alert("please fill the form correctly");
  } else {
    logIn(user);
  }
};
export const handleLogout = history => {
  if (localStorage.getItem("userType")) {
    localStorage.removeItem("userType");
    history.push(urls.login);
  }
};
