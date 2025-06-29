const bio = document.getElementById("bio");

const botao = document.createElement("button");
botao.textContent = "Clique aqui para ver uma Mensagem!";
botao.className = "meu-botao";

const mensagem = document.createElement("p");
mensagem.textContent = "Não tenha medo de mudar, de experimentar e de se transformar. A reinvenção é a chave para a superação.";
mensagem.style.display = "none";

botao.addEventListener("click", function() {
    mensagem.style.display = "block";
});

bio.insertAdjacentElement("afterend", botao);
botao.insertAdjacentElement("afterend", mensagem);
