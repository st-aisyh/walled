export const getCurrentUser = (arr) => {
    return arr.find((user) => {
      const loggedInUser = JSON.parse(localStorage.getItem("loginForm"));
  
      return loggedInUser.email === user.email;
    });
  };