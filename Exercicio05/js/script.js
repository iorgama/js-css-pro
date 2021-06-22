let mostrarTodosOsDados = document.querySelector('#lista-dados');
let botaoEnviarDados = document.querySelector('#enviar');

let chamada = new XMLHttpRequest();
const url = "https://608850faa6f4a3001742632f.mockapi.io/api/v1/Produtos";

mostrarTodosOsDados.addEventListener('click', function(event){
  event.preventDefault(); 
  pegaValor();

});

botaoEnviarDados.addEventListener('click', function(event){
  event.preventDefault(); 
  enviaDados();
});

pegaValor();

function enviaDados(){
  chamada.open("POST", url, true);
  chamada.setRequestHeader("Content-type", "application/json;charset=UTF-8");

  let nome = document.querySelector('#nome').value;
  let preco = document.querySelector('#preco').value;

  chamada.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 201){
      pegaValor();
    }
  }

  chamada.send(
    JSON.stringify({
      nome: nome,
      preco: preco
    })
  );
}

function pegaValor(){
  chamada.open("GET", url, true);
  //verifica se houve alteração no resultado da sua requisição
  chamada.onreadystatechange = function(){
    //4 - finalizou a requisição
    if(this.readyState === 4 && this.status === 200){
      let array = JSON.parse(this.responseText);
      mostraArray(array);
    }
  }
  chamada.send(null);
}

function mostraArray(array){
  let saida = '';
  for(let i = 0; i < array.length; i++){

    saida += '<div class="container-card">' +
      '<h1 class="titulo-card">' + array[i].nome + '</h1>' +
      '<div class="imagem-card">' +
        '<img src="' + array[i].imagem + '" alt="' +array[i].nome +'">' +
      '</div>' +
      '<p class="preco">' + array[i].preco + '</p>' +
      '<p class="descricao">' + array[i].descricao + '</p>' +
      '<p class="loja">' + array[i].loja + '</p>' +
    '</div>';
    //saida += '<a>"' + array[i].nome + '"</a></br>';
  }
  document.getElementById('lista-de-produtos').innerHTML = saida;

}