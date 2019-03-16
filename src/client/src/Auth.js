class Auth {
  constructor() { }

  getCookie = () => {
    if (document.cookie.indexOf('connect.sid=') >= 0) {
      return true;
    }
    return false;
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
