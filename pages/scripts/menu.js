function carregarMenu(){
    document.body.insertAdjacentHTML("afterbegin", ` <div class="menu">
      <h1 class="logo_name">GeekShop</h1>

      <div class="container_direita_menu">
        <ul>
          <li>Produtos</li>
          <li>Sobre</li>
          <li>Cadastro</li>
        </ul>

        <div class="carrinho_icone_container">
          <img src="../../images/cart.svg" />
        </div>
      </div>
    </div>`)}

    carregarMenu();