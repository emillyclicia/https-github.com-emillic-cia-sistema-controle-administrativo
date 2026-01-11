let registros = [];

const form = document.getElementById("form");
const lista = document.getElementById("lista");
const total = document.getElementById("total");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const descricao = document.getElementById("descricao").value;
    const valor = Number(document.getElementById("valor").value);
    const tipo = document.getElementById("tipo").value;

    registros.push({ descricao, valor, tipo });
    atualizarTela();
    form.reset();
  });
}

function atualizarTela() {
  lista.innerHTML = "";
  let soma = 0;

  registros.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.descricao} - R$ ${item.valor}`;
    lista.appendChild(li);

    soma += item.tipo === "receita" ? item.valor : -item.valor;
  });

  total.textContent = `Total: R$ ${soma}`;
}
