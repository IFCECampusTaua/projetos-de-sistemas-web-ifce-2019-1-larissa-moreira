function numero() {
	var num = Math.floor((Math.random() * 50) + 1);
	document.getElementById('number').innerHTML = num;
}
document.getElementById('btn').addEventListener("click", numero);