var digito1;
var digito2;
var resultado;
function calcularSuma(){
	var digito1Element=document.getElementById("digito1");
	var digito2Element=document.getElementById("digito2")
	digito1=digito1Element.value;
	digito2=digito2Element.value;
	console.log(digito1);
	console.log(digito2);
	suma=digito1+digito2;

	var digito1f= parseFloat(digito1);
	var digito2f=parseFloat(digito2);
	
	resultado=digito1f+digito2f;
	console.log(resultado);
	var resultadoElement=document.getElementById("resultado");
	resultadoElement.innerHTML='resultado=' +resultado;
}
	function calcularResta(){

	var digito1Element=document.getElementById("digito1");
	var digito2Element=document.getElementById("digito2")
	digito1=digito1Element.value;
	digito2=digito2Element.value;
	console.log(digito1);
	console.log(digito2);
	resta=digito1-digito2;

	var digito1f= parseFloat(digito1);
	var digito2f=parseFloat(digito2);
	resultado=digito1f-digito2f;
	console.log(resultado);
	var resultadoElement=document.getElementById("resultado");
	resultadoElement.innerHTML='resultado=' +resultado;

}

	function calcularDivision(){

	var digito1Element=document.getElementById("digito1");
	var digito2Element=document.getElementById("digito2")
	digito1=digito1Element.value;
	digito2=digito2Element.value;
	console.log(digito1);
	console.log(digito2);
	resta=digito1/digito2;

	var digito1f= parseFloat(digito1);
	var digito2f=parseFloat(digito2);
	resultado=digito1f/digito2f;
	console.log(resultado);
	var resultadoElement=document.getElementById("resultado");
	resultadoElement.innerHTML='resultado=' +resultado;

	}

	function calcularMultiplicacion(){

	var digito1Element=document.getElementById("digito1");
	var digito2Element=document.getElementById("digito2")
	digito1=digito1Element.value;
	digito2=digito2Element.value;
	console.log(digito1);
	console.log(digito2);
	resta=digito1  * digito2;

	var digito1f= parseFloat(digito1);
	var digito2f=parseFloat(digito2);
	resultado=digito1f * digito2f;
	console.log(resultado);
	var resultadoElement=document.getElementById("resultado");
	resultadoElement.innerHTML='resultado=' +resultado;
	}

