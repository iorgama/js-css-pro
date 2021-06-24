let request = new XMLHttpRequest();
const url = "https://608850faa6f4a3001742632f.mockapi.io/api/v1/tasks";

let botaoAdicionaTarefa = document.querySelector('#adiciona-tarefa');

botaoAdicionaTarefa.addEventListener('click', function(event){
  event.preventDefault(); 
  enviarDados();
});

listarDados();

function listarDados(){
  if(navigator.onLine){
    request.open("GET", url, true);
    request.send(null);

    request.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
          let array = JSON.parse(this.responseText);
          window.localStorage.setItem('tarefas', JSON.stringify(array));
          ajustaArray(array);
      }
    }
  }else{
      let valorLocalStorage = window.localStorage.getItem('tarefas');
      valorLocalStorage = JSON.parse(valorLocalStorage);
      ajustaArray(valorLocalStorage);
  }
}

function enviarDados(){
  request.open("POST", url, true);
  request.setRequestHeader("Content-type", "application/json;charset=UTF-8");
  let tarefa = document.querySelector('#tarefa').value;

  request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 201){
      //limpa o formulario
      document.querySelector('#tarefa').value = '';
      listarDados();
    }
  }

  request.send(
    JSON.stringify({
      tarefa: tarefa
    })
  );
}

function ajustaArray(array){
  let saida = '';
  for(let i = 0; i < array.length; i++){

    saida += '<div class="container-card">' +
      '<h1 class="titulo-card">' + array[i].title_task + '</h1>' +
      '<div class="imagem-card">' +
        '<img src="' + array[i].image + '" alt="' +array[i].title_task +'">' +
      '</div>' +
      '<p class="preco">' + array[i].tarefa + '</p>' +      
      '<p class="preco">' + array[i].level + '</p>' +
    '</div>';
  }
  document.getElementById('lista-tarefa').innerHTML = saida;

}
