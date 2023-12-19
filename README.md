# 🎮 Escrevendo as Classes de Um Jogo

Este projeto foi criado para o desafio Escrevendo as Classes de Um Jogo realizado para o **Bootcamp Potência Tech iFood: Programação do Zero** oferecido pela **DIO** numa bolsa concedida pelo **iFood**.

Seu objetivo era utilizar o conteúdo ensinado até então, como variáveis, estruturas condicionais, loopings e operadores e funções e classes e objetos. 

A linguagem de programação utilizada é o JavaScript, sendo ela o foco do Bootcamp. 

O código funciona da seguinte forma: foi criada uma `classe` com o nome de criandoHeroi, que recebe o nome do herói, idade e sua classe. Depois, foram criadas duas funções, a primeira com o nome de `atacar`, com o objetivo de comparar a classe do herói informada ao criar o objeto com o tipo de ataque que ele realizará de acordo com a estrutura de decisão feita (vide tabela abaixo):  

|  Classe |    Ataque    |
|---------|--------------|
|Mago     |Magia         |
|Guerreiro|Espada        |
|Monge    |Artes Marciais|
|Ninja    |Shuriken      |

A segunda função é para escrever num `console.log` a mensagem "O herói `classe do herói` atacou com `tipo do ataque` e totalizou `dano do ataque` de dano no monstro. Esse dano é um número específico predefinido (20). O monstro que está sendo atacado tem 100 de vida e cada golpe dará 20 de dano fixo. O programa fará um looping mostrando quatro vezes a mensagem de `atacar` e, como o monstro tem 100 de vida e cada ataque causa 20, o looping terminará quando a quantidade de dano for equivalente a vida do monstro, mostrando em um `console.log` a mensagem final de "O herói atacou mais uma vez e derrotou o monstro."

É definido já no código as informações e características do objeto pré-prontas `Duffie` para nome, `26` para idade e `ninja` para classe.

Enfim, espero que gostem do pequeno projeto! Obrigada.