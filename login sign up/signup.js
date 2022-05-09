document.querySelector("#customer").addEventListener("submit",signup)

function signup(){
  event.preventDefault();
 var newcustomer=[{
  email:document.querySelector("#email").value,
  passwd:document.querySelector("#passwd").value,

 }]
 
 var customerinfo=localStorage.setItem("info",JSON.stringify(newcustomer))

 
}


document.querySelector("#mysignin").addEventListener("submit",signin)

function signin(){
  event.preventDefault();

  var signin=JSON.parse(localStorage.getItem("info"))
  
  for(i=0;i<signin.length;i++)
  {
    if(Email===signin[i].email && Passwd===signin[i].passwd){
      alert("Login sucsessfully")
      return
    }
    else
    {
      alert("Either input or password is Incorrect")
      return
    }
    }
  }