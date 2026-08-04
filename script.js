const DESTINO = "https://jardineiro.net";

const btnMaior = document.getElementById("maior");
const btnMenor = document.getElementById("menor");

btnMaior.addEventListener("click", () => {
  const destino = new URL(DESTINO);
  const params = new URLSearchParams(window.location.search);

  // repassa todos os parâmetros da URL atual para o destino
  params.forEach((valor, chave) => {
    destino.searchParams.set(chave, valor);
  });

  window.location.href = destino.toString();
});

btnMenor.addEventListener("click", () => {
  alert("Acesso negado. Você precisa ter 18 anos ou mais.");
});
