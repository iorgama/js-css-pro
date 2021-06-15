function carregaDados(arquivo) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.onload = mostraDados;
  httpRequest.open('GET', arquivo, true);
  httpRequest.send(null);
}

function mostraDados() {
  var lista = document.getElementById('lista');
  lista.innerHTML = this.responseText;
  console.log(this.responseText);
}

let btnProdutos = document.getElementById('btn-produtos');
btnProdutos.addEventListener('click', function () {
  carregaDados('produtos.html');
});

let btnCarros = document.getElementById('btn-carros');
btnCarros.addEventListener('click', function () {
  carregaDados('carros.html');
});
