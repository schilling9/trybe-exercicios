let peca = "BISPO";
let resultado = peca.toLowerCase();

switch (resultado) {
    case "peao":
        console.log("anda para frente e captura as peças em daiagonal, apenas uma casa por vez");
        break;
    case "torre":
        console.log("anda em linha reta para qualquer um dos quatro lados");
        break;
    case "bispo":
        console.log("anda em diagonal para qualquer um dos quatro lados");
        break;
    case "cavalo":
        console.log("anda no formato da letra (L)");
        break;
    case "rei":
        console.log("anda uma casa para qualquer um dos lados");
        break;
    case "rainha":
        console.log("andar para qualquer uma das direções, vulgo peça mais foda");
        break;

}