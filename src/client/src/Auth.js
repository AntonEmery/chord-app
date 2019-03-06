class Auth {
  constructor() {
    this.authenticated = false;
  }

  isLoggedIn = () => {
    console.log('is logged in');
    fetch(`http://localhost:8080/isLoggedIn`, {
      credentials: 'include',
      mode: 'cors'
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        if (data.status === 200) {
          return true;
        }
        return false;
      });
  };

  getCookie = () => {
    if (document.cookie.indexOf('connect.sid=') > 0) {
      console.log('true');
      return true;
    }
    console.log('false');
    return false;
  };

  login(callback) {
    this.authenticated = this.isLoggedIn();
    callback();
  }

  logout(callback) {
    fetch('http://localhost:8080/logout', {
      credentials: 'include',
      mode: 'cors'
    })
    callback();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
