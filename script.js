let num = document.querySelector("input#fnum");
let lista = document.querySelector("select#lista");
let valores = [];
let res = document.querySelector("div#res");

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function add() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value}  adicionado`;
    lista.appendChild(item);

    console.log(lista + "ok");
  } else {
    alert("valor invalido ou ja encontrado na lista");
  }
  num.value = "";
  num.focus();
}
function finalizar() {
  if (valores.length == 0) {
    alert("Adicione valores antes de Finalizar");
  } else {
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let media = 0;
    let soma = 0;

    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) {
        maior = valores[pos];
      } else {
        valores[pos] < menor;
      }
      menor = valores[pos];
    }
    media = soma / tot;
    res.innerHTML = "";
    res.innerHTML += `<p> ao todo , temos o total ${tot} de números finalizado`;
    res.innerHTML += `<p> o Maior valor informado foi ${maior}</p> `;
    res.innerHTML += `<p> O Menor Valor Informado foi ${menor}</p>`;
    res.innerHTML += `<p> Somando todos os valores, temos: ${soma}</p>`;
    res.innerHTML += `<p> A Média de todos os valores é ${media}</p>`;
  }
}
