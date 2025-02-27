let numeros = [5,8,2,9,3];

//ESCOLHER QUAL VETOR SERÁ MOSTRADO
console.log(numeros[1])


//CONTAGEM DE POSIÇÕES
console.log(numeros.length)


//BUSCAR ONDE ESTÁ ARMAZENADO O VALOR 
let buscar = numeros.indexOf(2)
console.log(buscar)


//COLOCA EM ORDEM CRESCENTE
console.log(numeros.sort())


//ADICIONA MAIS UM ELEMENTO NO FINAL DO ARRAY
numeros.push(1)
console.log(numeros)


//**************** FORMAS DE FAZER LAÇOS ****************/
console.log('****************************')
for(let i = 0; i < numeros.length; i++){
    console.log(`A posição ${i} tem o valor ${numeros[i]}`)
}

//OUTRA FORMA
console.log('****************************')
for(let numero in numeros){
    console.log(`A posição ${numero} tem o valor ${numeros[numero]}`)
}