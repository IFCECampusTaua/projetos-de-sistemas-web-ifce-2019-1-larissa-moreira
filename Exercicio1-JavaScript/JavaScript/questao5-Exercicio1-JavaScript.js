document.getElementById('btn').addEventListener("click", handleclick, false);
function handleclick() {
	var n1 = document.getElementById('one').value;
	var n2 = document.getElementById('two').value;
	document.getElementById('result').innerHTML = resto(n1,n2);
}
function resto(n1,n2) {
	return n1 % n2;
}