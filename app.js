//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let sorteados = [];

function adicionarAmigo() {
  let amigo = document.getElementById("amigo").value;

  if (amigo === "") {
    alert("Por favor, insira um nome.");
  } else {
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    atualizarListaAmigos();
  }
}

function limparListaNomes(id) {
  let lista = document.getElementById(id);
  lista.innerHTML = "";
}

function atualizarListaAmigos() {
  let lista = document.getElementById("listaAmigos");
  limparListaNomes("listaAmigos");

  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function amigoAleatorio() {
  let quantidadeParaSortear = amigos.length;
  return Math.floor(Math.random() * quantidadeParaSortear);
}

function sortearAmigo() {
  let listaResultado = document.getElementById("resultado");
  if (amigos.length > 0) {
    limparListaNomes("listaAmigos");

    let numeroSorteado = amigoAleatorio();
    let amigoSorteado = amigos[numeroSorteado];

    sorteados.push(amigoSorteado);
    amigos.splice(numeroSorteado, 1);

    atualizarListaAmigos();
    listaResultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
  } else {
    alert("Não tem ninguém para sortear, adicione nomes a lista!");
    listaResultado.innerHTML = "";
  }
}
