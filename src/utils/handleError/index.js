function AuthenticationError(error) {
  switch (error.code) {
    case "auth/email-already-in-use":
      return error.message;
    case "auth/weak-password":
      return error.message;
    case "auth/user-not-found":
      return error.message;
    case "auth/invalid-email":
      return error.message;
    case "auth/wrong-password":
      return error.message;
    default:
      return "something unexpected happened";
  }
}
export default AuthenticationError;
