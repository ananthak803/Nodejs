// const sessionIdToUserMap = new Map();

// function setUser(id,user){
//     sessionIdToUserMap.set(id,user);
// }

// function getUser(id){
//     return sessionIdToUserMap.get(id);
// }

// module.exports ={
//     setUser,
//     getUser,
// }


const jwt =require('jsonwebtoken');
const key="suckair"
function setUser(user){
    return jwt.sign({
        _id:user._id,
        email:user.email,
    },key);
}

function getUser(token){
    if(!token) return null;
    return jwt.verify(token,key);
}

module.exports ={
    setUser,
    getUser,
}