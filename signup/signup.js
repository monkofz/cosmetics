document.getElementById('customer').addEventListener("submit",adduser);

function adduser(){
event.preventDefault()

  var email=document.getElementById('email').value
  var password = document.getElementById('passwd').value

  var user={
    Email:email,
    Password:password,
  }

  var json=JSON.stringify(user);
  localStorage.setItem("userdata",json);
}


document.getElementById('mysignin').addEventListener("submit",loginfunc);

function loginfunc(){
  event.preventDefault();

  var email=document.getElementById('Emailid').value
  var password = document.getElementById('Passid').value
  // var reslt = 
  
  var user=localStorage.getItem("userdata");
  var data=JSON.parse(user);

  if(email== data.Email && password == data.Password)
  {
    alert("Sign in Successful")
    document.getElementById('result').innerHTML=email

    return
  }
  else {
    alert("Sign in Failed \nPlease recheck The inserted data")
   
    return
  }
}

function myfunc(){

    var user_password=document.getElementById('passwd');
    if(user_password.type=='password')
    {
        user_password.type='text';
    }
    else
    {
        user_password.type='password';
    }
}
