let  amigos = []; // Array para armazenar os nomes dos amigos

// função para adicionar um amigo
function adicionarAmigo() {
    let nome = document.querySelector('input').value.trim();// Seleciona o valor do input e remove espaços em branco

    if (nome !== ''){// Verifica se o nome não está vazio
        amigos.push(nome);// Adiciona o nome ao array de amigos
        atualizarLista();
    }else{
        alert('Digite um nome válido');
    }    
}

// função para atualizar a lista de amigos
function atualizarLista(){
    let lista = document.querySelector('#listaAmigos');// Seleciona a lista de amigos
    lista.innerHTML = ''; // Limpa a lista atual
    amigos.forEach((amigo, index) => {
        let li = document.createElement('li');// Cria um novo item de lista
        li.textContent = amigo; // Define o texto do item como o nome do amigo
        lista.appendChild(li); // Adiciona o item à lista
    });
}

// função para sortear os amigos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }
    let sorteado = amigos [Math.floor(Math.random() * amigos.length)]; // Seleciona um amigo aleatoriamente
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = ""; // limpa resultado anterior
    let li = document.createElement('li');
    li.textContent = `O amigo sorteado foi: ${sorteado}`; // Define o texto do item como o nome do amigo sorteado
    resultado.appendChild(li); // Adiciona o item ao resultado
}    
