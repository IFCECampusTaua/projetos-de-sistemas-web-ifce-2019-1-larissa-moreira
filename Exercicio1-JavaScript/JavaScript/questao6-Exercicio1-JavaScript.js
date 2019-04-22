var caixa1 = document.getElementById('caixa1');
window.onclick = function (input) {
	if (input.target == caixa1) {
		alert("Primeira caixa ativada!");
	}else{
		alert("Perdeu o foco!");}
}