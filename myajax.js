$('#age').keydown(function(event){
 
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '16'){
		ajaxFunction();	
	}
 event.stopPropagation();
});
function ajaxFunction(){
	var ajaxRequest;
	
	try{
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
		    		alert("Your browser broke!");
				return false;
			}
		}
	}
	
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4 && ajaxRequest.status==200){
		var ajaxDisplay = document.getElementById("ajaxDiv");
		ajaxDisplay.innerHTML = ajaxRequest.responseText;
		}
	}
	var age = document.getElementById("age").value;
	var queryString = "?age=" + age;
	ajaxRequest.open("GET", "http://localhost/ddic.php" + queryString, true);
	ajaxRequest.send(null); 
}


