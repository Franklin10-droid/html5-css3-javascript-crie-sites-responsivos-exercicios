var cor = document.getElementById("cor");

cor.onchange = function(){

	var labels = document.querySelectorAll("label");

	for (var i = 0; i < labels.length; i++) {
		
		var label = labels[i];

		label.style.color = cor.value;

	};

};

var botao = document.getElementById("btn-volume");
var volume = document.getElementById("volume");

botao.onclick = function(){

	alert("O volume atual é: "+volume.value);

};