const AppSettings = {
   PORT:3001,
   HOST:"http://localhost",
   TOKEN:9999999,
   getUrl(){
       return `${this.HOST}:${this.PORT}`
   },
   loginSessionKey:"loginAccount"
}

export default AppSettings;