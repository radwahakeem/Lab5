function checkdata()
{
 var email = document.getElementById('mail').value;
 var password = document.getElementById('pass').value;


 var getEmail= localStorage.getItem('UserEmail');
 var getPassword= localStorage.getItem('UserPassword');
 if(email==getEmail)
 {
 	if(password==getPassword)
 	{

 		alert("Login Successfull");
     

 	}
 	else
 	{

 		alert("Wrong Password");
 	}
 }
 else
 {

 	alret("Wrong Details");
 }
 
}