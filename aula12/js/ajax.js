function carregaDados(arquivo) {
  let httpRequest = new XMLHttpRequest();
  
  httpRequest.onloadstart = mostraLoader;

  httpRequest.onload = mostraDados;

  httpRequest.open('GET', arquivo, true);
  httpRequest.send(null);
}

function mostraLoader(){
  var lista = document.getElementById('lista');
  lista.innerHTML = 'Carregando...'
  // Podemos tambem adicionar uma imagem no lugar do texto
  //lista.innerHTML = '<img src="img/ajax-loader.gif">';
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

let btnFrutas = document.getElementById('btn-frutas');
btnFrutas.addEventListener('click', function () {
  carregaDados('frutas.html');
});
