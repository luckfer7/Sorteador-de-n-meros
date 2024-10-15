function sortear () {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
            //esse looping apenas impede a repetição de números chamando a função de criar um numero aleatório novamente.
        }

        sorteados.push(numero);
    }

    //alert(sorteados);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

    alterarEstadoDoBotao();
    
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarEstadoDoBotao () {
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    // } else {
    //     botao.classList.remove('container__botao');
    //     botao.classList.add('container__botao-desabilitado');
    }
    
}

function reiniciar() {
    quantidade.value = '';
    de.value = '';
    ate.value = '';
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarEstadoDoBotao();
    // alert('botao clicado');
}

reiniciar();