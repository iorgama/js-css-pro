const url = "http://www.omdbapi.com/";
const api_key = "apikey=9755b1af"
let request = new XMLHttpRequest();

let botaoSearchMovie = document.querySelector('#search');

botaoSearchMovie.addEventListener('click', function(event){
  event.preventDefault();
  cleanCardMovie();
  searchMovie();
});

function cleanCardMovie(){
  document.getElementById('card-error').innerHTML = "";
  document.getElementById('card-img').innerHTML = "";
  document.getElementById('card-text').innerHTML = "";
}

function cleanInputMovie(){
  document.querySelector('#name-movie').value = ''; 
}

function searchMovie(){
  let nameMovie = document.querySelector('#name-movie').value.trim();
  if(nameMovie != ''){
    let urlParams = url + "?t=" + nameMovie + "&" +api_key;
    request.open("GET", urlParams, true);
    request.send(null);
    request.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        let storeMovie = JSON.parse(this.responseText);
        cleanInputMovie();
        if(!storeMovie.Error){
          showMovie(storeMovie);         
        }else{
          showMessage("error", "Ops, não conseguimos encontrar o filme que você digitou.");
        }
      }
    }
  }
}

function showMessage(id, field){
  let p = document.createElement('p');
  p.setAttribute("id",id);
  p.innerText = field;
  document.getElementById('card-error').appendChild(p);
}

function showMovie(storeMovie){
    createImg(storeMovie.Poster);
    createTxt("Title", storeMovie.Title);
    createTxt("Runtime", storeMovie.Runtime);
    createTxt("Genre", storeMovie.Genre);
    createTxt("imdbRating", storeMovie.imdbRating);
}

function createImg(src){
  let img = document.createElement('img');
  img.src = src;
  document.getElementById('card-img').appendChild(img);
}

function createTxt(id, field){
  let p = document.createElement('p');
  p.setAttribute("id",id);
  p.innerText = field;
  document.getElementById('card-text').appendChild(p);
}