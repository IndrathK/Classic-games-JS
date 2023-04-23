// funções do carro

// lista de carros

let xCarros = [510,510,510,510,510,510];
let yCarros = [40,95,150,210,260,315];
let velocidadesCarros = [2,4,2.5,3,2.5,3.5];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro); 
    }
}

function movimentoDoCarro() {
    for (let i = 0; i < imagemCarros.length; i++) {
        xCarros[i] -= velocidadesCarros[i];
    }
}    

function retornaPosicaoInicialDoCarro() {
    
    for ( let i = 0; i < imagemCarros.length; i++ ){
        if(passouTodaATela(xCarros[i])){
            xCarros[i] = 510;
        }
    }
}

function passouTodaATela(xCarro){
    return xCarro < -50;
}