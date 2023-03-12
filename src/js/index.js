const botoescarrosel = document.querySelectorAll(".botao");

const imagens = document.querySelectorAll(".imagem");

botoescarrosel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    DesativarBotaoSelecionado();

    SelecionarBotaoCarrosel(botao);

    EsconderImagemAtiva();

    MostrarImagemDeFundo(indice);
  });
});
function MostrarImagemDeFundo(indice) {
  imagens[indice].classList.add("ativa");
}

function SelecionarBotaoCarrosel(botao) {
  botao.classList.add("selecionado");
}

function EsconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function DesativarBotaoSelecionado() {
  const botaoselecionado = document.querySelector(".selecionado");
  botaoselecionado.classList.remove("selecionado");
}
