function Transf(){
	var num = document.getElementById("input").value, output = document.getElementById("output"), base = document.getElementById("nums").value;
	num = parseInt(num, 10);
	num2 = num.toString(base).toUpperCase();
	output.innerHTML = num2;
}