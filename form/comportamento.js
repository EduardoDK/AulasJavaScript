
function mostrarSenha(id , idbtn){

    var elemento = document.getElementById(id);
    var botao = document.getElementById(idbtn);


    if(elemento.type == "password"){
        elemento.type = "text";
        botao.innerHTML = "#";

    }else{
        elemento.type = "password";
        botao.innerHTML = "@";

    }

 
    
}

function compararSenha(){
    
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;

    if(senha != confirmarSenha){
        alert("As senhas devem ser iguais");
    }

}