//document.getElementById("SignInButton").onclick = function(){
  //CheckDetail();
//}
        //location.href = "www.yoursite.com";
  function CheckDetail(){
    var Username= document.getElementById("username").value;
    var password= document.getElementById("inputPassword").value;
    if(Username==""||password==""){
      alert("Enter Valid username or password");
    }
    else if(Username=="vandy" && password=="vandy"){
    window.open("jsAssignment2.html");
    }
    else {
      alert("Either username and password is wrong");
    }
  }
