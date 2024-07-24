let amigos = [];

function adicionar() {
    console.log('botão clicado!')
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value)

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    }
    else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
    if (amigos == amigo){
    lista.textContent == undefined;
    }
    else {
        lista.textContent == undefined;
    }

}

function reiniciar() {
    console.log('Botão clicado!')
    amigos = [];
    let friends = document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
    

    if (friends.textContent === '') {
        alert('Campo já está limpo!')
    }
    else {
        friends.textContent = '';
        alert('Campo reiniciado!')

    }
}

function sortear() {
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        }
        else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }
    }
    sorteio.innerHTML = amigos[i]

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}