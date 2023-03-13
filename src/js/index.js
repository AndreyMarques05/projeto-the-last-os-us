/*

    objetivo - quando clicarmos no botao temos que mostar a imagem no fundo correspondente
    
    - passo 1 dar um jeito de pegar o elemento HTML do botoes

    - passo 2 dar um jeito de identificar o clique do usuario no botao

    - passo 3 desmarcar o botao selecionado anteriormente

    - passo 4 marcar o botao clicado como se estivesse selecionada

    - passo 5 esconder a imagem de fundo antetior

    - passo 6 fazer aparecer a imagem de fundo corresponder ao botao clicado

*/

const  botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

    desativarbotaoselecionado();

    selecionarbotaocarrossel(botao);

    esconderimagemativa();

    mostrarimagemdefundo(indice);
    })
})

function mostrarimagemdefundo(indice) {
    console.log(imagens);
    imagens[indice].classList.add('ativa');
}

function selecionarbotaocarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderimagemativa() {
    const imagemativa = document.querySelector('.ativa');
    imagemativa.classList.remove('ativa');
}

function desativarbotaoselecionado() {
    const botaoselecionado = document.querySelector('.selecionado');
    botaoselecionado.classList.remove('selecionado');
}

