/*
JSON
significa JavaScript  Object Notation  que  traduzido pro português fica algo comonotação de objeto  JavaScript

Explicando de um modo simples JSON é basicamente uma forma de converter um objeto em texto e o contrário também, um texto  em objeto.

Ele   é usado principalmente para transimtir dados entre  sistemas  de orma  simple, 
já que o formato de texto é lido por praticamente toda  linguagem de programação.

Para trabalahar com JSON no Javascript usamos dois métodos:

JSON.parse() -> Converte texto  no padrão JSON  em objetos
JSON.strngify  -> Converte objetos em texto padrão JSON
*/

let saida = document.querySelector('div#saida-dados')

//OBJETO
const carro = {
    marca: "Porshe",
    modelo: "Gt3-rs",
    ano: "2025"
}

// Converte objetos em texto padrão JSON
let texto = JSON.stringify(carro)

saida.innerHTML = texto

// Converte texto  no padrão JSON  em objetos
let obj = JSON.parse(texto)
console.log(obj.modelo)