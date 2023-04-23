// funções do ator

let yAtor = 366;
let xAtor = 40;

let hit = false;
let meusPontos = 0;

// visualização do ator
function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

//movimentação do ator
function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
        yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
        if(podeSeMover()){
            yAtor += 3;
        }
    }
}

function verificaColisao(){
    for (let i = 0; i < imagemCarros.length; i++){
        hit = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
        if (hit){
            colidiu();
            //somDaColisao.play();
                if(PontosMaiorQueZero()){
                    meusPontos -= 1;
                }
        }
    }

    function colidiu(){
        yAtor = 366;
    }
    
}

function placar(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 69, 0));
    text(meusPontos, width / 5, 27);

}

function retornoDoAtor(){
    if (yAtor < 0){
        yAtor = 366;
        meusPontos += 1;
        //somDoPonto.play();
    }
}

function PontosMaiorQueZero(){
    return meusPontos > 0;
}

function podeSeMover(){
    return yAtor < 366;
}