
        

document.querySelector("#form").addEventListener("submit" ,mysignup)

var signupdata= JSON.parse(localStorage.getItem("Signin"))||[]
function mysignup(){
    event.preventDefault();
    var userObj = {

        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#pass").value,
    };
   
    // console.log(signupdata)
       

            // sign in
    if(userObj.name == "" || userObj.mobile == "" || userObj.email == "" || userObj.password == ""){
        alert("Enter All details first");
    } 
    else {
        signupdata.push(userObj)
        localStorage.setItem("Signin",JSON.stringify(signupdata))
        alert("Sign Up Successfully")
       
        // document.querySelector("#form").reset();
    }
    
   
}

// login in
document.getElementById("form1").addEventListener("submit",mylogin)
var regdUsers=signupdata

function mylogin(){
    event.preventDefault();

    var enteredEmail = document.querySelector("#lemail").value;
        var enteredPass = document.querySelector("#lpass").value;
        // console.log(email,pass);

        if(enteredEmail == "" || enteredPass == ""){
            alert("Enter all details")
        }
        else{
            var flag = false;
            for(var i=0; i<regdUsers.length; i++){
                console.log(regdUsers[i]);
                if(regdUsers[i].email == enteredEmail && regdUsers[i].password == enteredPass){
                    // console.log("Login success");
                    flag = true;
                    alert("Login success")
                    document.querySelector("#display").innerText=regdUsers[i].name
                    
                    break;
                }
            }
            if(!flag){
                // console.log("login failed")
                alert("login failed");
            }
}

}
