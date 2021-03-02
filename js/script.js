var email = document.querySelector("#inputEmail");
var formulario = document.querySelector(".conteudo__principal___form");
var botaoEniviar = document.querySelector("#btnSubmit");
var mensagemErro;
function enviarDados(){
    if(email.value === ""){
        mensagemErro = document.createElement("p");
        this.mensagemErro.textContent = "Email vazio."
        document.querySelector(".conteudo__principal___input").style.borderColor = "red";
        mensagemErro.style.color = "black"
        mensagemErro.style.fontWeight = "bold";    
        formulario.appendChild(mensagemErro);
        document.querySelector("#btnSubmit").disabled = true;
        apagaMenssagem();
    }

    if(!validateEmail(email.value) && (email.value !== "")){
        mensagemErro = document.createElement("p");
        this.mensagemErro.textContent = "Email incorreto!";
        document.querySelector(".conteudo__principal___input").style.borderColor = "red";
        mensagemErro.style.color = "black";
        mensagemErro.style.fontWeight = "bold";
        formulario.appendChild(mensagemErro);
        document.querySelector("#btnSubmit").disabled = true;
        apagaMenssagem();
    }
}

 function apagaMenssagem(){
    email.addEventListener('click', function(){
        mensagemErro.textContent = "";
        document.querySelector("#btnSubmit").disabled = false;
        document.querySelector(".conteudo__principal___input").style.borderColor = "black";


         
    })
 }

function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
