async function carregarDados() {
  var resposta = await fetch("http://localhost:3000/products");
  var dados = await resposta.json();

  dados.forEach((meuItem) => {
    var meuProdutoHTML = `
       <div class="produto">
        <div class="produto_imagem_container">
          <img
            src=${meuItem.imagem}
            class="produto_imagem"
          />
        </div>
        <div class="produto_informacoes_container">
          <h3>${meuItem.nome}</h3>
          <span>${meuItem.raridade}</span>
          <p>${meuItem.descricao}</p>
          <span>R$ ${meuItem.preco}</span>
          <button>Adicionar</button>
        </div>
      </div>
    `;

    document
      .getElementById("lista")
      .insertAdjacentHTML("beforeend", meuProdutoHTML);
  });
}
carregarDados();


// produtos.forEach(function (item) {});
