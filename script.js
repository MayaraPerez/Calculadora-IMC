
var calcular  = document.getElementById('calcular');



function imc () {
    var nome = document.getElementById('nome');
    var altura = document.getElementById('altura');
    var peso = document.getElementById('peso');
    var resultado = document.getElementById('resultado');

    if (nome.value != '' && altura.value != '' && peso.value != '') {
        
        const valorIMC = (peso.value / (altura.value * altura.value)).toFixed(1);

        let classificao = '';

        if (valorIMC < 18.5) {
            classificao = 'Abaixo do peso.';
        }else if (valorIMC < 25) {
            classificao = 'com o peso, Ideal !';
        }else if (valorIMC < 30) {
            classificao = 'Levemente acima do peso.';
        }else if (valorIMC < 35) {
            classificao = 'com Obesidade grau I.';
        }else if (valorIMC <40) {
            classificao = 'com Obesidade grau II';
        }else {
            classificao = 'com Obesidade grau III, Cuidado!';
        }
    
        resultado.textContent = `${nome.value} seu IMC é ${valorIMC} e você está ${classificao}`;

    }else {
        resultado.textContent = 'Preencha todos os campos'
    }

}

calcular.addEventListener('click', imc);