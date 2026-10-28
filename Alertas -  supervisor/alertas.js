// Data de hoje no cabeçalho
const hoje = new Date();

const data = hoje.toLocaleDateString("pt-BR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
});

document.getElementById("data").textContent =
  data.charAt(0).toUpperCase() + data.slice(1);

// Filtros da tabela
const botoes = document.querySelectorAll(".filtro");
const linhas = document.querySelectorAll(".linha[data-status]");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    botoes.forEach((b) => b.classList.remove("ativo"));
    botao.classList.add("ativo");

    const filtro = botao.dataset.filtro;

    linhas.forEach((linha) => {
      const mostrar = filtro === "todos" || linha.dataset.status === filtro;
      linha.classList.toggle("oculto", !mostrar);
    });
  });
});
