document
  .getElementById("form_pesquisa")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    var cep = document.getElementById("input_cep").value;

    var url = `https://viacep.com.br/ws/${cep}/json/`;

    var resposta = await fetch(url);
    var dados = await resposta.json();
    console.log(dados);

    document.getElementById("bairro_info").innerText =
      `Bairro: ${dados.bairro}`;
    document.getElementById("logradouro_info").innerText =
      `Logradouro: ${dados.logradouro}`;
    document.getElementById("localidade_info").innerText =
      `Localidade: ${dados.localidade}`;
    document.getElementById("uf_info").innerText = `UF: ${dados.uf}`;

    // LIMPAR CAMPO
    document.getElementById("input_cep").value = "";
  });
