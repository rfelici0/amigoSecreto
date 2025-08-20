let  amigos = [];

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
        amigos.push(amigo);
        console.log(amigos);
    
    if (amigo != ''){
        atualizarLista();  
    }else{
        alert('digite um nome valido');
    }    
}

function atualizarLista(){
    let lista = document.querySelector('#listaAmigos');
}