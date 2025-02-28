//FUVÇÃO COM IF
console.log(par_impar(5))
function par_impar(n){
    if(n%2 == 0){
        return 'Par!';
    }else{
        return 'Impar!'
    }
}
//FUNÇÃO COM DOIS PARAMETROS
console.log(2+5)
function soma(n1, n2){
    return n1 + n2
}

//PRÉ-DEFINIÇÃO DE PARAMETRO
console.log(2)
function soma(n1, n2=0){
    return n1 + n2
}
