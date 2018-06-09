window.cipher = {
	encode(offset, string){//funcion codificar con parametros, offset es el num de posiciones a recorrer, string es la cadena de texto
		let mensaje ='';
		for (let i = 0;i<string.length; i++) {
			let ascii = string.charCodeAt(i)
			let formula = (ascii - 65 + offset) % 26 + 65;
			mensaje += String.fromCharCode(formula);
		}
		return mensaje;
	},
	decode(offset, string ){ //funcion decodificar con parametros
		let mensaje2 ='';
		for (let i = 0;i<string.length; i++) {
			let ascii = string.charCodeAt(i)
			let formula = (ascii + 65 - offset) % 26 + 65;
			mensaje2 += String.fromCharCode(formula);
		}
		return mensaje2;
	}
};


//GRACIAS! Atte. NANCY MEJIA GOMEZ
