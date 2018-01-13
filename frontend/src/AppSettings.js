const AppSettings = {
   PORT:3001,
   HOST:"http://localhost",
   TOKEN:9999999,
   getUrl(){
       const port = this.PORT === 80? '':`:${this.PORT}`
       return `${this.HOST}${port}`
   },
   loginSessionKey:"loginAccount"
}

export default AppSettings;