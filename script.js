// function calcularImc(peso, altura) {
//   return peso / Math.pow(altura, 2);
// }

// function classificarImc(imc) {
//   if (imc < 18.5) {
//     return "Abaixo do peso";
//   } else if (imc >= 18.5 && imc < 25) {
//     return "Peso normal";
//   } else if (imc >= 25 && imc < 30) {
//     return "Sobrepeso";
//   } else if (imc >= 35 && imc < 40) {
//     return "Obeso";
//   } else {
//     return "Obesidade grau III";
//   }
// }


// let imc = calcularImc(110, 1.76);
// let classificacao = classificarImc(imc);

// console.log("IMC:", imc.toFixed(2));
// console.log("Classificação:", classificacao);



//////////////////////////////1////////////////////////////
// function saudar() {
//     console.log('Ola seja bem vindo ')
// }
// saudar()
//////////////////////////////2////////////////////////////,
// function mostrarNome(nome) {
//   console.log(`Olá, ${nome}`);
// }


// mostrarNome("lucas");
//////////////////////////////3////////////////////////////

// function  soma (num1 , num2) {
//     return num1+num2;
// }
// let resultado = (soma (90 , 20))
// console.log (`sua soma é ${resultado}`)
//////////////////////////////4////////////////////////////
// function  dobro (num1) {
//     return num1*2;
// }
// let resultado = (dobro (20 ))
// console.log (`sua soma é ${resultado}`)
//////////////////////////////5////////////////////////////
// function  parOuImpar(numero) {
//     if (numero % 2 === 0) {
//         console.log(`seu numero é par`);

//     }
//     else{
//         console.log(`seu numero é ímpar`)
//     }
// }
// parOuImpar (1)
//////////////////////////////6////////////////////////////
// function maiorNumero(num, num2) {
//     if (num > num2) {
//         console.log(`O número ${num} é maior que o ${num2}`);
//     } else {
//         console.log(`O número ${num2} é maior que o ${num}`);
//     }
// }

// maiorNumero(10, 20);
//////////////////////////////7////////////////////////////

// function media(n1, n2, n3) {
//     return (n1 + n2 + n3) / 3;
// }
// let resultado = media(9 , 3 , 1)
// console.log (resultado.toFixed(2))

//////////////////////////////8////////////////////////////
//  function converterCelsius() {
// let n1 = Number(prompt("Ensira o número"));

// let conversao = (n1 * 9/5) + 32
// console.log("A conversão fica: " + conversao)
// }
// converterCelsius()

//////////////////////////////9////////////////////////////
// function contador() {
//     let n1 = Number(prompt("Insira o número")); 

//     for (let i = 1; i <= n1; i++) {
//         console.log(i);
//     }
// }

// contador();
//////////////////////////////10////////////////////////////
// function tabuada() {
//     let n1 = Number(prompt(" o número")); 

//     for (let i = 1; i < 11; i++) {
//         console.log(n1 * i)
//     }
// }

// tabuada()

// const pessoa ={
//     nome : "joao",
//     idade : "24",
//     falar : function () {
//         console.log("olá meu nome é " + this.nome);

//     },
// };

// pessoa.nome ="diogo"
// console.log(pessoa.nome)
// console.log(pessoa["nome"])

////////////////////////////////////1//////////////////////////////////

// const carro = {
//     marca : "chevrolet",
//     modelo: "corsa",
//     ano: "2002",
    
  
// }  
// console.log(carro["modelo"]);

////////////////////////////////////2//////////////////////////////////

// const aluno = {
//     nome : "lucas",
//     idade : "24",

// }
// aluno.idade="21"
// console.log(aluno.idade)
// console.log(aluno["idade"])
////////////////////////////////////3//////////////////////////////////

// const produto = {
//     nome : "cavalini",
//     preco : 340,
//     falar : function () {
//         console.log(`O ` +this.nome + ` custa ` + this.preco)
//     } 
    
// }
// produto.falar()

////////////////////////////////////4//////////////////////////////////

// let pessoa = {
//     nome:'wendell',
// }
// pessoa.idade = 17

// console.log(pessoa.idade)
// console.log(pessoa.nome)

// console.log(pessoa['idade'])
// console.log(pessoa['nome'])
////////////////////////////////////5//////////////////////////////////

// let pessoa = {
//     nome:'wendell',
// }
// pessoa.idade = 17

// console.log(pessoa.idade)
// console.log(pessoa.nome)

////////////////////////////////////6//////////////////////////////////

// Crie um objeto carro com marca, modelo e ano e mostre a frase "Carro: Ford Ka - 2015".

// let carro = {
//     marca : "ford",
//     modelo : "Ka",
//     ano : "2015",

//     exibirDados : function   () {
//        console.log(`Carro : ${this.marca}  ${this.modelo}  - ${this.ano}` ) 
//     }
 
// }
// carro.exibirDados()
 ////////////////////////////////////7//////////////////////////////////  

// const produto = {
//     objeto :  50,


// }
//     produto.objeto = "80"
//     console.log(produto.objeto)
// ////////////////////////////////////8//////////////////////////////////
// const aluno = { nome: "João" };

// aluno.nota = 8.5;

// console.log(aluno); 
////////////////////////////////////9//////////////////////////////////
// const aluno = { nome: "Ana", nota: 9.5 };

// console.log(aluno.nome);
// console.log(aluno.nota);
////////////////////////////////////10//////////////////////////////////
// let pessoa = {
//     falar: function(){
//         console.log('olá')
//     },
// }
// pessoa.falar()

////////////////////////////////////11//////////////////////////////////

// let pessoa = {
//     nome: 'joao',
//     falar: function(){
//         console.log('meu nome é ' + this.nome)
//     },
// }
// pessoa.falar()
////////////////////////////////////12//////////////////////////////////
// pessoa2.falar();

////////////////////////////////////13//////////////////////////////////
// const pessoa3 = {
//     nome: "João",
//     falar: function() {
//         console.log("Meu nome é " + this.nome);
//     }
// };

// pessoa3.falar();
////////////////////////////////////14//////////////////////////////////

// const produto2 = {
//     nome: "Celular",
//     preco: 1000,
//     desconto: function(porcentagem) {
//         this.preco -= this.preco * (porcentagem / 100);
//     }
// };

// produto2.desconto(10);
// console.log(produto2.preco);

////////////////////////////////////15//////////////////////////////////
// const aluno2 = {
//     nome: "Lucas",
//     notas: [7, 8, 9]
// };

// console.log(aluno2.notas);

// //// 10.for
// for (let chave in aluno2) {
//     console.log(chave, aluno2[chave]);
// }

////////////////////////////////////16//////////////////////////////////
// const aluno3 = {
//     nome: "Ana",
//     notas: [8, 9, 10],
//     media: function() {
//         let soma = this.notas.reduce((a, b) => a + b, 0);
//         return soma / this.notas.length;
//     }
// };

// console.log(aluno3.media());

// //// 12.aprovados
// const alunos = [
//     { nome: "A", nota: 8 },
//     { nome: "B", nota: 5 },
//     { nome: "C", nota: 7 }
// ];

// const aprovados = alunos.filter(a => a.nota >= 7);
// console.log(aprovados);

////////////////////////////////////17//////////////////////////////////
// const contaBancaria = {
//     saldo: 1000,
//     depositar(valor) {
//         this.saldo += valor;
//     },
//     sacar(valor) {
//         this.saldo -= valor;
//     }
// };

////////////////////////////////////18//////////////////////////////////
// const usuario = {
//     nome: "Pedro",
//     logado: false,
//     login() {
//         this.logado = true;
//     },
//     logout() {
//         this.logado = false;
//     }
// };

// //// 15.objeto dentro de objeto
// const pessoa4 = {
//     nome: "Carlos",
//     endereco: {
//         cidade: "Porto Alegre",
//         estado: "RS"
//     }
// };

// console.log(pessoa4.endereco.cidade);

////////////////////////////////////19//////////////////////////////////
// const produtos = [
//     { nome: "TV", preco: 200 },
//     { nome: "Mouse", preco: 50 }
// ];

// const caros = produtos.filter(p => p.preco > 100);
// console.log(caros);

// //// 17.sistema usuario
// const sistema = {
//     usuarios: [],

//     adicionarUsuario(nome) {
//         if (!this.usuarios.includes(nome)) {
//             this.usuarios.push(nome);
//         }
//     },

//     listarUsuarios() {
//         console.log(this.usuarios);
//     }
// };

// //// 18.carrinho
// const carrinho = {
//     produtos: [],

//     adicionar(produto) {
//         this.produtos.push(produto);
//     },

//     remover(nome) {
//         this.produtos = this.produtos.filter(p => p.nome !== nome);
//     },

//     total() {
//         return this.produtos.reduce((soma, p) => soma + p.preco, 0);
//     }
// };

////////////////////////////////////20//////////////////////////////////
// const escola = {
//     alunos: [],

//     adicionar(nome, notas) {
//         this.alunos.push({ nome, notas });
//     },

//     media(aluno) {
//         let soma = aluno.notas.reduce((a, b) => a + b, 0);
//         return soma / aluno.notas.length;
//     },

//     aprovados() {
//         return this.alunos.filter(a => this.media(a) >= 7);
//     }
// };

////////////////////////////////////21//////////////////////////////////
// const banco = {
//     contas: [],

//     criarConta(nome, saldo) {
//         this.contas.push({ nome, saldo });
//     },

//     transferir(de, para, valor) {
//         const origem = this.contas.find(c => c.nome === de);
//         const destino = this.contas.find(c => c.nome === para);

//         if (origem && destino && origem.saldo >= valor) {
//             origem.saldo -= valor;
//             destino.saldo += valor;
//         }
//     }
// }
