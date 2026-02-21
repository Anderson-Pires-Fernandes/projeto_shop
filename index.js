function realizarLogin(event){
  
    event.preventDefault();
    var email = document.getElementById("email").value 
    var senha = document.getElementById("senha").value 

if (!email) {
    document.getElementById("email").style.borderColor = "tomato";
    // document.getElementById("error_email").innerText = "O email e obrigatorio";
    return;
  }

  if (!senha) {
    document.getElementById("senha").style.borderColor = "tomato";
    return;
  }

    if(email === "senai@gmail.com" && senha === "senai"){
        window.location.href =  "./pages/home/home.html";
    }
    else{
        alert("Credenciais incorretas")
    }
}

function exibirSenha() {
  var tipo_atual = document.getElementById("senha").type;

  /* Condicao com IF ternario
  document.getElementById(senha).type = tipo_atual === "text" ? "password" : "text"
  */

  if (tipo_atual === "text") {
    document.getElementById("senha").type = "password";
  } else if (tipo_atual === "password") {
    document.getElementById("senha").type = "text";
  }
}

document.getElementById("form_login").addEventListener("submit", realizarLogin);
