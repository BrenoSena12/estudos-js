var nome = document.getElementById('nome');
    var velocidade_via = document.getElementById('velocidade_via');
    var velocidade_veiculo = document.getElementById('velocidade_veiculo');
    velocidade_via = parseInt(velocidade_via);
    velocidade_veiculo = parseInt(velocidade_veiculo);
    var resposta = document.getElementById('resposta');
    
function clicar(){
    if(velocidade_veiculo > velocidade_via){
       var res = (`Olá senhor(a) ${nome}!.<br>
            A velocidade máxima permitida pela via era de ${velocidade_via}, <br>
            e sua velocidade foi de ${velocidade_veiculo}. <br>
            <strong>MULTADO(A)</strong>`);
        resposta.innerText = res;
    }else{
        var res =(`Olá senhor(a) ${nome}!.<br>
            A velocidade máxima permitida pela via era de ${velocidade_via}, <br>
            e sua velocidade foi de ${velocidade_veiculo}. <br>
            <strong>TUDO CERTO!!!!!!!!!!!!</strong>`);
        
        resposta.innerText = res;
    }
}