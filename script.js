
function setup() {
  createCanvas(500, 400);
  //somDaTrilha.loop();
}

function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentoDoCarro();
    movimentaAtor();
    retornaPosicaoInicialDoCarro();
    retornoDoAtor();
    verificaColisao();
    placar();
}   




