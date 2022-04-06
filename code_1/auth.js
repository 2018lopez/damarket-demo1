//UC-1: AuthVendorandManagement

const user = require('./user')// Credentials for valid users

function authUser(uname, pwd, utype){//the function authUser will verify if user credentials exist in the system - username, password, usetype(management,vendor)


    if(user.users.some(data => data.username === uname && data.password === pwd && data.uType === utype)){
        return true
    }
    return false
    
}

module.exports=authUser