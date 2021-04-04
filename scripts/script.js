let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")

function calcular() {
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
  let qdtTotalCerveja = cervejaPP(duracao) * adultos;
  let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

  resultado.innerHTML = `<p><img src="./img/carne.png">${qdtTotalCarne / 1000}kg de Carne</p>`
  resultado.innerHTML += `<p><img src="./img/lata.png">${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`
  resultado.innerHTML += `<p><img src="./img/bebidas.png">${Math.ceil(qdtTotalBebidas / 2000)} Pet's 2l de Bebidas</p>`


}
function carnePP(duracao) {
  return duracao >= 6 ? 650 : 400;
}


function cervejaPP(duracao) {
  return duracao >= 6 ? 2000 : 1200;
}



function bebidasPP(duracao) {
  return duracao >= 6 ? 1500 : 1000;
}














