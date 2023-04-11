alert("Bienvenido! Calcula tu IMC");

let peso;
let altura;

while (isNaN(peso)) {
  peso = parseInt(prompt("Ingrese su peso en kg"));
}

while (isNaN(altura) || altura <= 0) {
  altura = parseInt(prompt("Ingrese su altura en cm")) / 100;
}

function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}

let imc = calcularIMC(peso, altura);

if (!isNaN(imc)) {
  alert("Su IMC es: " + imc.toFixed(2));

  if (imc < 18.5) {
    alert("Su IMC indica que se encuentra dentro del rango de peso insuficiente.");
  } else if (imc >= 18.5 && imc <= 24.9) {
    alert("Su IMC indica que se encuentra dentro del rango de peso saludable.");
  } else if (imc >= 25.0 && imc <= 29.9) {
    alert("Su IMC indica que se encuentra dentro del rango de sobrepeso.");
  } else {
    alert("Su IMC indica que se encuentra dentro del rango de obesidad.");
  }
} else {
  alert("Ingrese valores numéricos válidos para peso y altura");
}
