
function setUserData(data){
    const userData=JSON.parse(localStorage.setItem("token",JSON.stringify(data)))
    return userData
}

function getUserData(){
    const userData=JSON.parse(localStorage.getItem("token"))
    return userData
}






export {getUserData,setUserData}