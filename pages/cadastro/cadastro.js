/*

function cadastrarProduto(event){ 
}
*/

document.getElementById("form_produto").addEventListener("submit", (event) => {
  event.preventDefault(); // evita de recarregar

  // recupera os valores dos elementos do formulario
  var nome = document.getElementById("input_nome").value;
  var raridade = document.getElementById("select_raridade").value;
  var preco = document.getElementById("input_preco").value;
  var descricao = document.getElementById("textarea_descricao").value;
  var url = document.getElementById("input_imagem").value;

  // requisicao para cadastrar o produto do formulario

  fetch("http://localhost:3000/products", {
    method: "POST",
    body: JSON.stringify({
      nome: nome,
      raridade: raridade,
      preco: preco,
      descricao: descricao,
      imagem: url,
    }),
    headers: { "Content-Type": "application/json" },
  });
});