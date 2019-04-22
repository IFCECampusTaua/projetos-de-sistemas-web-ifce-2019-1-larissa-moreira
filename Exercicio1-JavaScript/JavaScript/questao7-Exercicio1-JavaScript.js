function verificar() {
	var txt = document.getElementById("caixa").value;
	var numero = txt.length;
	if (numero > 0 && numero < 10) {
		alert("Insuficiente!");
	}else if (numero > 10 && numero < 14) {
		alert("Bom!");
	}else if (numero > 14) {
		alert("Muito Bom!");
	}else {
		alert("Nada foi digitado!");
	}
}
document.getElementById('btn').addEventListener("click", verificar); 