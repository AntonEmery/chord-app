class Auth {
  constructor() {
    this.authenticated = false;
  }

  getCookie = () => {
    if (document.cookie.indexOf('connect.sid=') > 0) {
      console.log('true');
      return true;
    }
    console.log('false');
    return false;
  };

  login(callback) {
    this.authenticated = true;
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
