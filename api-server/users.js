const config = require('./config')

const users={    
}
const getDefaultUser=(un)=>{
    return {
        avatarUrl:config.origin +  "/public/avatar/Annonymous.png" ,
        name:un 
    }
}

module.exports={
    getUser:function(username){
        const user=users[username.toLocaleLowerCase()]
        return user?user:getDefaultUser(username);
    },
    addUser(username,data){
        const user=users[username.toLocaleLowerCase()]
        !data && (data = getDefaultUser(username))
        return users[username] = data;
    },
    
}