//Declarandovariavéis
let tarefas = [];

//Função que valida o preenchimento do campo, caso esteja vazio
function validaCampo(){
    let valida = false;
    if(document.getElementById("task").value == "")
    valida = true;
    return valida
}

//Função que adiciona tarefa
function adicionarTarefa(){
    //variavel que vai receber as tarefas
    let linhas = document.getElementById("task");

    if (validaCampo(0)) {
        alert("Preencha o campo com a tarefa!")
    }else{
        //Adicionando as tarefas
        tarefas.push(linhas.value);
        //passando para a proxima linha vazia 
        linhas.value="";
        //chamando a função que vai mostrar todas as tarefas
        listarTarefas();
    }
    document.getElementById("taks").focus();
}

function listarTarefas(){
    let valor="";
    for(let i=0; i<tarefas.length;i++){
        valor += tarefas[i] + "<br>";    
    }
    document.getElementById("lista").innerHTML = valor;
}