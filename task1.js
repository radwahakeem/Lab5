
	function save(){
		var date=new Date();
		date.setMonth(date.getMonth()+3);
		var val= document.getElementById("usrnm").value;
		document.cookie="usernamecookie="+val+";expires="+date;
	}

