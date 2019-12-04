function validacao(){

    var autorizacao = false;
    var msg = "";

    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var interesse = document.getElementsByName("areas[]");
    var contador = 0
    if(nome.length < 1){
        msg += "\r\n O Campo nome é Obrigatorio";
    }

    if(idade < 18 || idade > 120){
        msg += "\r\n O Campo idade deve ser maior que 18 e menor que 120";
    }

    for(i=0;i<interesse.length;i++){
        
        if(interesse[i].checked)contador++;
    }
    if(contador < 1){
        msg += "\r\n Preencha pelo menos uma area de interesse"
    }
  
   
    
    





    if(msg == ""){
        autorizacao = true;
    }
    else{ 
    alert("Verifique os seguintes campos." + msg);
    }
    return autorizacao;
}



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
    var aviso = document.getElementById("aviso");

    if(senha != confirmarSenha){
        alert("As senhas devem ser iguais");
        
        aviso.innerHTML = "As senhas não correspondem";
    }
    else{
        aviso.innerHTML = null;
    }

}
function visualizar(){

    var interesse = document.getElementsByName("areas[]");
    msg = "";

    for(i=0;i<interesse.length;i++){
      
            if(interesse[i].checked == true){
                msg  += "\r\n"  + interesse[i].value;
            }
    }
    if(msg == "")msg = "nenhuma area de interesse selecionada";
    else msg = msg;
    alert(msg);
}
