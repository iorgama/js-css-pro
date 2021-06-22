window.localStorage.setItem("nome", "Iorgama");

const data = {
  nome: "Abner Fonseca",
  rua: "Joaquim Silva",
  numero: 173
}

const valorData = JSON.stringify(data);

window.localStorage.setItem("usuario", valorData);

const retornaObjetoDoStorage = window.localStorage.getItem("usuario");
console.log(jSON.parse(retornaObjetoDoStorage));