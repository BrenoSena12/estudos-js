function somar(){
    var valor1 = document.getElementById('valor1');
    var valor2 = document.getElementById('valor2');
    var res = document.getElementById('resposta');
    valor1 = Number(valor1.value);
    valor2 = Number(valor2.value);
    var resposta = valor1 + valor2;
    
    res.innerHTML = resposta
}