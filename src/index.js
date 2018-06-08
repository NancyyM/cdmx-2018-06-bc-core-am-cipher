// mensajedecode =encodejs;
//let mensajecode =decodejs();

const encodejs=()=>{ //funcion codificar
	let string1= document.getElementById("textencode"); //lo que el usuario ingreso en el input text caja1 con id=textencode, lo asigna a la variable string1
	let respuesta= cipher.encode(offset,string1); //la funcion encode, de la clase cipher. regresa el valor a la variable respuesta
	document.getElementById("textdecode").value=respuesta;	
	return respuesta;
}

/*const decodejs=()=>{ //esta funcion todavia no la termino :(
let mensaje1 = 
alert(mensaje1);
let mensaje2 = cipher.decode(1,mensaje1);
alert(mensaje2); */