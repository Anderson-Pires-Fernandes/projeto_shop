document.getElementById("botao_ver").addEventListener("click", async (event) => {

var url = `https://br.dolarapi.com/v1/cotacoes/usd`

var resposta = await fetch(url);
var dados = await resposta.json();
    console.log(dados);

     document.getElementById("compra_info").innerText =
      `Valor de compra: ${dados.compra}`;
      document.getElementById("venda_info").innerText =
      `Valor de venda: ${dados.venda}`;
      document.getElementById("fechoAnterior_info").innerText =
      `Valor de fecho anterior: ${dados.fechoAnterior}`;
});
