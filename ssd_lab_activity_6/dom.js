function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    let flag = true;

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (x.match(validRegex) == false)
    {
        document.getElementById('emailError').innerHTML="Please enter a valid EMail";
        flag = false;
        return false;
    }
    else{
        document.getElementById('emailError').innerHTML="";
    }
    
    let y = document.forms["myForm"]["servername"].value;
    if (y.match(/^[A-Z]*$/) == false)
    {
        document.getElementById('serverError').innerHTML="Please enter a valid Server Name";
        flag = false;
        return false;
    }
    else{
        document.getElementById('serverError').innerHTML="";
    }
   

    var pass1 = document.forms["myForm"]["spass"].value;
    var pass2 = document.forms["myForm"]["scpass"].value;
    console.log(pass1);

    if(pass1 != pass2)
    {
        document.getElementById('spassError').innerHTML="Password not Matching";
        document.getElementById('scpassemailError').innerHTML="Password not Matching";
        flag = false;
        return false;
    }
    else{
        document.getElementById('spassError').innerHTML="";
        document.getElementById('scpassemailError').innerHTML="";
    }


    var all = "Name:" +  document.forms["myForm"]["name"].value  + " " + "Email:" + x  + " " + 
    "UserName: " + y + " " + "Team Lead:" + " " + document.forms["myForm"]["teamlead"].value;

    alert(all);


    if(flag){return true;}
  }


  