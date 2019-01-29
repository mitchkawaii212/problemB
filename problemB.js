
let xhttp = new XMLHttpRequest ();

let 1 =document.getElementById ('myList');

function loadViaAjax (){
	xhttp.onreadystatechange= function(){

		l.innerHTML =" please wait...";
		if (xhttp.readystate == 4 && xhttp.status == 200){
			let data ==Json.parse (xhttp.response);
			let html = "";

			for (let i = 0 ; i = data.length; i++){
				html += " <option>" + data[i].title+"</option>";
			}

			l.innerHTML =html;

			}


		} else if (xhttp.status == 503){
			console.log ("Service Unavailable");
		}

	}
	
	xhttp.open ("GET","https://jsonplaceholder.typicode.com/todos", true);
	xhttp.send();

}

