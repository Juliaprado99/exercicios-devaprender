// Todos os mini desafios do DevAprender JavaScript

// Mini-Desafio 1
// Trocando Valores de Variáveis

 let a = "vermelho";
let b = "azul";

function trocarValores(a, b) {
  let x = a;
  a = b;
  b = x;
  return [a, b];
}
console.log(trocarValores(a, b));
 
// Mini-Desafio 2
// Maximo entre dois valores

 function maxMin(num1, num2) {
  if (num1 > num2) {
    return `${num1} eh maior que ${num2}`;
  } else {
    return `${num2} eh maior que ${num1}`;
  }
}

console.log(maxMin(5, 10));
console.log(maxMin(12, 6));

// Mini-Desafio 3
// FizzBuzz (Se o numero for divisivel por 3, eh Fizz. Se o numero for divisivel por 5m, eh Buzz. Se for divisivel por 3 e 5, eh FizzBuzz)

for (let i = 0; i <= 100; i++) {
  if (i % 3 != 0 && i % 5 != 0) {
    console.log(i);
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " FizzBuzz");
  } else if (i % 3 === 0) {
    console.log(i + " Fizz");
  } else if (i % 5 === 0) {
    console.log(i + " Buzz");
  }
} 

// Mini-Desafio 4
// Medidor de velocidade de transito(Velocidade Maxima: 70km/h, a cada 5km/h acima do limite, voce ganha 1 ponto na carteira)

function verificarVelocidade(velocidade) {
  let velocidadekm = velocidade;
  let pontos = 0;
  if (velocidadekm < 70) {
    console.log("Tudo ok, voce pode seguir.");
  } else {
    let x = velocidade - 70;
    if (x > 5) {
      pontos = Math.round(x / 5);
      console.log("Pontos na carteira: " + pontos);
    } else {
      console.log('Voce ultrapassou a velocidade permitida. Atencao!! ' + pontos + ' pontos na carteira');
    }
  }
}

verificarVelocidade(80);
verificarVelocidade(71);
verificarVelocidade(69);
 

// Mini-Desafio 5
// Par ou Impar

 function parImpar(num){
    if(num % 2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}


console.log(parImpar(2));
console.log(parImpar(5));
 

// Mini-Desafio 6
// Encontre o String (encontrar uma string dentro de um objeto)

 let carro = {
  modelo: "Fusca",
  ano: 1962,
  motor: 1.0,
};

function encontrarString(obj){
    for(let i in carro){
        if(typeof carro[i] == 'string'){
            console.log(carro[i]);
        }
    }
}
encontrarString(carro)
 

// Mini-Desafio 7
// Criar uma funcao que recebe um numero limite, identifica os multiplos de 3 e 5 e retorna a soma deles

 function multiplos(num){
    let soma = 0;
    for(let i = 0; i <= num; i++){
        if(i % 3 == 0 || i % 5 == 0){
            soma += i;
        }
    }
    return soma;
}


console.log(multiplos(10)); 

// Mini-Desafio 8
// Media de nota escolar

let aluno1 = [7,8,5]
let aluno2 = [8,9,5,7]


function media(array){
    let soma = 0
    for(let i = 0; i < array.length; i++){
        soma+=array[i]
    }
    return (soma/array.length).toFixed(2)
}       

console.log(media(aluno1));
console.log(media(aluno2)); 

// Mini-Desafio 9
// Contador de Asteriscos

function contadorAsterisco(num) {
  for (let i = 0; i <= 10; i++) {
    console.log("*".repeat(i));
  }
}
contadorAsterisco(10) 

// Mini-Desafio 10
// Encontrar numeros primos

 function ehPrimo(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(ehPrimo(7));
console.log(ehPrimo(10)); 

// Mini-Desafio 11
// Criar um objeto endereco, com rua, cidade, CEP. Um metodo do objeto deve retornar o endereco completo.
// Como estou no momento estudando orientacao a objetos, dedici realizar esse exercicio utilizando classe, que eh um conceito que acabei de aprender e dsejo praticar

class Endereco {
    constructor(rua, cidade, cep) {
        this.rua = rua;
        this.cidade = cidade;
        this.cep = cep;
        this.exibirEndereco = function () {
            console.log(`Rua: ${this.rua}, Cidade: ${this.cidade}, CEP: ${this.cep}`);
    }
}}

let endereco = new Endereco("Paraiso Eterno", "Sao Paulo", "01234567");
endereco.exibirEndereco() 

// Mini-Desafio 12
// Encontre a igualdade entre objetos

class Endereco {
    constructor(rua, cidade, cep) {
        this.rua = rua;
        this.cidade = cidade;
        this.cep = cep;
}}

let endereco1 = new Endereco('a', 'b', 'c')
let endereco2 = new Endereco('a', 'b', 'c')

function igualdade(obj1, obj2) {
    for (let i in obj1) {
        if (obj1[i] !== obj2[i]) {
            return false;
        }
    }
    return true;
}

console.log(igualdade(endereco1, endereco2)) 

// Mini-Desafio 13
// Criar um objeto postagem de blog que tenha titulo, autor, conteudo, mensagem, comentarios(array com autor e comentario),  se esta ao vivo (boolean).

class Postagem {
    constructor(titulo, autor, mensagem, visualizacoes, comentarios, estaAoVivo) {
        this.titulo = titulo;
        this.autor = autor;
        this.visualizacoes = visualizacoes;   
        this.mensagem = mensagem;
        this.comentarios = comentarios;
        this.estaAoVivo = estaAoVivo;
}
}
let blog = new Postagem('Como se tornar um programador', 'ProgSenior', 'Estude muito todas as linguagens que voce conseguir e em 6 meses voce tera um salario de 5k sendo programador junior', 250,[{devjunin: 'muito bom o conteudo, nao vejo a hora de ganhar 5k'}, {devplenin: 'sou pleno e ainda nem ganho 5k, o que sera que estou fazendo de errado, @ProgSenior?'}], true)
console.log(blog) 

// Mini-Desafio 13
//Criar um array de faixa de preco com objetos(tooltip, minpreco, maxpreco)


function faixadepreco(tooltip, minpreco, maxpreco){
    return {
        tooltip,
        minpreco,
        maxpreco
    }
}

let array = [
    faixadepreco('R$ 0,00 a R$ 100,00', 0, 100),
    faixadepreco('R$ 100,00 a R$ 200,00', 100, 200),
    faixadepreco('R$ 200,00 a R$ 500,00', 200, 500),
    faixadepreco('R$ 500,00 a R$ 1000,00', 500, 1000),
    faixadepreco('R$ 1000,00 a R$ 2000,00', 1000, 2000),
]

console.log(array) 












