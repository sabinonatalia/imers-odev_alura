var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;

function Chutar() {
    var resultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);
    if (chute == numeroSecreto) {
        resultado.innerHTML = "Você acertou!🤗";
        // console.log("Você acertou!🤗")
    } else if (chute > numeroSecreto) {
        resultado.innerHTML = "Humm, o número secreto é menor 😐";
        //console.log("Ihh, o número secreto é menor 😐");
        tentativas = tentativas - 1;

    } else if (chute < numeroSecreto) {
        resultado.innerHTML = "Humm, o número secreto é maior 😐";
        //console.log("Ihh, o número secreto é maior 😐");
        tentativas = tentativas - 1;
    }

    if (tentativas == 0) {
        resultado.innerHTML =
            "Suas tentativas acabaram 😥! O número secreto era o " + numeroSecreto + ".";
        //console.log( "Suas tentativas acabaram. O número secreto era 😥 " + numeroSecreto);   
    }

}
