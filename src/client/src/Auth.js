const axios = require('axios');

class Auth {

  getCookie = () => {
    if (document.cookie.indexOf('connect.sid=') >= 0) {
      return true;
    }
    return false;
  };

  logout(callback) {
    axios({
      url: 'http://localhost:8080/logout',
      withCredentials: true,
      mode: 'cors'
    })
    callback();
  }
}

export default new Auth();