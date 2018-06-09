const encodejs = () => { //funcion codificar
	let offset = parseInt(document.getElementById("positions").value);
	let text = document.getElementById("textencode").value; //lo que el usuario ingreso en el input text caja1 con id=textencode, lo asigna a la variable text
	let response = cipher.encode(offset,text); //la funcion encode, del objeto cipher. regresa el valor a la variable response
	document.getElementById("textdecode").value = response; // el elemento con el id textdecode le estoy asignando el valor de response (que el valor de la caja de texto ahora valga "response")
	document.getElementById("textencode").value =" "; //limpia la caja de texto 1 que tiene por id=textencode, una vez que el usuario haya hecho clic, el resultado aparecera en la caja 2, pero ahora a la caja 1 se le asigna un valor vacio
}

const decodejs = () => { //funcion decodificar
	let offset = parseInt(document.getElementById("positions").value);
	let text = document.getElementById("textdecode").value; //el texto que el usuario ingreso en la caja de texto 2 "textdecode", se lo asigno a la variable text
	let response = cipher.decode(offset,text); //la funcion decode que trabaja con dos parametros, le asigna el valor que trae a la variable response
	document.getElementById("textencode").value=response; //el valor de la variable response es  asigndo a el valor de la caja de texto 1
	document.getElementById("textdecode").value =" "; //limpia la caja de texto una vez que el usuario ingreso su texto a decodificar y le dio clic
}

// GRACIAS! Atte. NANCY MEJIA GOMEZ
