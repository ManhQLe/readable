const AppSettings = {
   PORT:3001,
   HOST:"http://localhost",
   getUrl(){
       return `${this.HOST}:${this.PORT}`
   }
}

export default AppSettings;