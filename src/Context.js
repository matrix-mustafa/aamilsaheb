import React from 'react'

const UserContext = React.createContext({

  getCookie : (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },

    setToken : () => {

        if( this.getCookie("user_its") === null){
         // this URL is for bchet.talabulilm
         window.location.replace('https://www.its52.com/Login.aspx?OneLogin=MHB&r=aHR0cHM6Ly9iY2hldC50YWxhYnVsaWxtLmNvbS9pdHMtbG9naW4=')
         // this URL is for testbchet.talabulilm
         // window.location.replace('https://www.its52.com/Login.aspx?OneLogin=MHB&r=aHR0cHM6Ly90ZXN0YmNoZXQudGFsYWJ1bGlsbS5jb20vaXRzLWxvZ2lu')
             return
           }

       var username = this.getCookie("user_its")
       var password = this.getCookie("ver")
         // this.getCookie("ver") != null
         //   ?
         //   : "c665872b7193541130e89d2ecbc8dc33";


             const token = Buffer.from(`${username}:${password}`, "utf8").toString(
               "base64"
             );
             localStorage.setItem("fa-token", token);
             return token;
     }
});




export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default UserContext