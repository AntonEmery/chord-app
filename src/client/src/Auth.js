class Auth {
  constructor() { }

  getCookie = () => {
    return fetch('http://localhost:8080/isLoggedIn', {
      credentials: 'include',
      mode: 'cors'
    })
      .then(result => result.json())
      .then((data) => {
        return data.status === 'logged in'
          ? true
          : false
      })
  };

  logout(callback) {
    fetch('http://localhost:8080/logout', {
      credentials: 'include',
      mode: 'cors'
    })
    callback();
  }
}

export default new Auth();
