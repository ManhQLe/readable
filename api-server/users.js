const config = require('./config')

const users = {}
const getDefaultUser = (un) => {
    return {
        avatarUrl: config.origin + "/public/avatar/Annonymous.png",
        name: un,
        login: un
    }
}

module.exports = {
    getUser: function (username) {
        const user = users[username.toLocaleLowerCase()]
        return user ? user : getDefaultUser(username);
    },
    addUser(username, data) {
        let user;
        if(data)
            users[username] = data;                
        user = users[username.toLocaleLowerCase()]
        
        !user && (user = users[username.toLocaleLowerCase()] = getDefaultUser(username));
        
        return user
    },

}