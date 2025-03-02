let listaDeAmigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById("amigo");
    let nome = amigo.value.trim();

    if (nome == "") {
        alert("Por favor, insira um nome");
        return;
    }

    listaDeAmigos.push(nome); 
    listaDeAmigos.sort(); 
 
    limpar();
    exibirLista()
}

function limpar() {
    let nome = document.querySelector("input");
    nome.value = "";
}

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {  
        alert("Não tem amigos para sortear");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        let amigoSorteado = listaDeAmigos[indiceAleatorio];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `O amigo secreto é:${amigoSorteado}`;
    }
}

function exibirLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaDeAmigos[i]; 
        lista.appendChild(li);
    }
}

