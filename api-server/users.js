const config = require('./config')

const users={
    annonymous:{
        avatarUrl:config.origin +  "/public/avatar/Annonymous.png"        ,
        name:"Annonymous"
    }
}


module.exports={
    getUser:function(usename){
        const user=users[username.toLocaleLowerCase()]
        return user;
    },
    addUser(username,data){
        users[username] = data;
    }
}