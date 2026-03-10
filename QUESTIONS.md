## Javascript

1. Qual é o operador lógico usado para verificar a negação de uma expressão? (Nota: 0,2)
c) !

2. Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array? (Nota: 0,2)
a) push()

3. O que o método “Array.map()” faz? (Nota: 0,2)
b) Mapeia os elementos de um array para um novo array com base em uma função de mapeamento.

4. Qual é a função do método “Array.filter()”? (Nota: 0,2)
b) Remover elementos do array com base em uma função de filtro.

5. O que é async/await em JavaScript? (Nota: 0,2)
c) Um conjunto de palavras-chave que tornam as funções assíncronas mais legíveis e fáceis de usar.

6. Qual é a sintaxe correta para definir uma função assíncrona chamada "getData"? (Nota: 0,2)
c) async function getData() { return new Promise({}); }

7. O que será impresso no código abaixo? (Nota: 0,6)
b) A.

8. Escreva uma função em JavaScript chamada “somaImpares” que recebe um número inteiro
function somaImpares(n) {
  soma = 0
	for(i=1; i<=n; i = i+2) {
    soma += i
  }
  console.log(soma)
}

somaImpares(5)

somaImpares(10)

9. Escreva uma função chamada” inverterPalavra” que recebe uma string como parâmetro e retorna a
string com as letras invertidas. (Nota: 0,6)

function inverterPalavra(palavra) {
  return palavra.split('').reverse().join('')
}

inverterPalavra("javascript")

10. Considere o seguinte trecho de código em JavaScript que tenta realizar a divisão de dois
números: (Nota: 0,6) Escreva abaixo o resultado retornado por cada função:
a)
console.log(dividirNumeros(20, 2));
10 

b)
console.log(dividirNumeros(6, 0));
Erro: Divisão por zero não é permitida. 

c)
console.log(dividirNumeros(21, 3));
7

11. Como você pode percorrer e mapear um array JSON em JavaScript? Explique como usar métodos
como "map", "forEach" ou "for...of" para iterar e manipular os elementos do array. (Nota: 0,7)
Para percorrer um array JSON é possível utilizar o map() para criar um novo array transformando dados, o forEach() para percorre um determinado array e o for...of é similar ao forEach no funcionamento.

12. O que são variáveis em JavaScript? Explique como declarar e atribuir valores a uma variável.
(Nota: 0,7)
Variáveis são nomes dados a espaços de memória destinados a alocar valores que vão desde números à caracteres textuais, as variáveis em Javascript pode ser atribuida utilizando o simbolo = . Nesse sentido a variável assume a posição da esquerda e o valor a posição da direita, podendo ser resultado de uma função ou até mesmo o próprio valor, em Javascript é interessante notar que a tipagem fraca facilita que variáveis antes númericas passem a ser textuais por n motivos dentro de um programa.

13. Em JavaScript, é possível ter múltiplas condições em uma estrutura "if/else"? Descreva como usar
operadores lógicos (como "&&" e "||") para combinar condições. (Nota: 0,6)
Em uma estrutura condicional é possível possuir várias lógicas diferentes, utilizando notações || (OR) e && (AND) podemos utilizar lógica booleana em condições para controlar o fluxo da aplicação. 

14. Descreva a sintaxe do bloco "try" em JavaScript. Dê um exemplo prático de como usar o "try" para
envolver um código suscetível a erros. (Nota: 0,7)
try serve para testar um código que pode ocasionar em erros, ao utilizar o catch podemos receber o erro e tratar da forma correta.
try {
  let x = 1/0
} catch (erro) {
  console.log("Divisão por zero")
}

15. Como você pode lançar manualmente uma exceção em JavaScript? Explique o uso da
palavra-chave "throw" para criar e lançar exceções personalizadas. (Nota: 0,7)
throw serve para criar um erro manualmente, controlando os erros possíveis da aplicação.

if (idade < 18) {
  throw new Error("Menor de idade")
}

## SQL

1. Como você seleciona todas as colunas de uma tabela em SQL? (Nota: 0,2)
b) SELECT *

2. Qual é o comando SQL utilizado para filtrar resultados em uma consulta? (Nota: 0,2)
d) WHERE

3. Qual é o comando SQL utilizado para ordenar os resultados de uma consulta em ordem
ascendente? (Nota: 0,2)
d) ORDER BY

4. Qual é o comando SQL utilizado para inserir novos dados em uma tabela? (Nota: 0,2)
b) INSERT

5. Qual é o comando SQL utilizado para atualizar dados em uma tabela? (Nota: 0,2)
b) UPDATE

## Integração de Sistemas

Integração de sistemas
1. O que é integração de sistemas? (Nota: 0,2)
a) É um processo de comunicação entre diferentes sistemas de computador para permitir o compartilhamento
de dados e funcionalidades.

2. O que significa API (Interface de Programação de Aplicativos) em integração de sistemas? (Nota:
0,2)
c) Um conjunto de funções e procedimentos que permitem a comunicação entre sistemas.

3. O que é um Web Service? (Nota: 0,2)
c) É uma solução para conectar sistemas diferentes via web, usando padrões como XML e SOAP.

4. O que é um token de acesso em integração de sistemas? (Nota: 0,2)
c) Uma chave de autenticação usada para autorizar o acesso a um serviço.

5. O que é um "webhook" na integração de sistemas? (Nota: 0,2)
d) É uma URL pública fornecida por um sistema para receber notificações automáticas de outro sistema.

6. O que é JSON? (Nota: 0,2)
c) Um formato de dados leve e de fácil leitura usado para trocar informações entre sistemas.

7. Qual é o código de status HTTP que indica sucesso na solicitação? (Nota: 0,2)
a) 200 OK.

8. O que são headers HTTP? (Nota: 0,2)
b) Informações adicionais enviadas pelo cliente e servidor em uma solicitação ou resposta HTTP.

9. Quais são os delimitadores usados para marcar tags em XML? (Nota: 0,2)
d) < >

10. Qual é a diferença entre integração de sistemas síncrona e assíncrona? (Nota: 0,2)
a) Na síncrona, a comunicação ocorre em tempo real com respostas imediatas, enquanto na assíncrona, a
resposta pode ser recebida em um momento posterior.