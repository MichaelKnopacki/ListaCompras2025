# 01. Integrando JavaScript ao Projeto

## Exercício 1: Exibir Mensagem no Console
Você aprendeu que o JavaScript pode ser usado diretamente no navegador e decidiu praticar usando apenas a ferramenta de console. Seu objetivo é escrever a mensagem **"Estou estudando JavaScript!"** no console.

**Resposta:**  
```javascript
const texto = "Estou estudando JavaScript!";
console.log(texto);
```
---

## Exercício 2: Cálculos Matemáticos com JavaScript
Você foi desafiado a implementar uma função que subtrai dois números. Para isso, você pode usar a ferramenta do console do navegador para implementar essa lógica.

Uma dica é criar duas variáveis `a` e `b` para armazenar os valores e exibir no console a diferença entre os dois números.

**Resposta:**  
```javascript
let a;
let b;

function subtracao(a, b) {
  return a - b;
}

console.log(subtracao(4, 1)); // Valores apenas para exemplo
```
---

## Exercício 3: Personalização das Mensagens Exibidas no Console
No exercício 1, você escreveu a mensagem **"Estou estudando JavaScript!"** no console do navegador. Agora, a ideia é evoluir essa mensagem.

Seu objetivo é personalizar a mensagem, permitindo que a pessoa usuária defina qual tecnologia ela está aprendendo.

**Resposta:**  
```javascript
const tecnologia = "Java";
console.log(`Estou estudando ${tecnologia}!`);
```
---

## Exercício 4: Integração do Arquivo JavaScript no Arquivo HTML
Até aqui, você praticou o JavaScript apenas pelo navegador, mas, para construir um site, utilizamos linguagens como HTML, CSS e JavaScript para implementar a estrutura, os estilos e a lógica, respectivamente.

Seu objetivo é criar um arquivo HTML ("index.html") e integrar um arquivo JavaScript ("script.js") através da tag `<script>`. Para garantir que a integração esteja funcionando, exiba a mensagem **"Integração realizada com sucesso!"** no console do projeto.

Lembre-se de que você pode usar o atalho de exclamação do Emmet (!) para criar a estrutura HTML rapidamente.

**Resposta:**
Arquivos criados dentro da pasta.

---

## Exercício 5: Manipulação do DOM para Capturar Valores do Arquivo HTML com JavaScript
Agora que você já integrou o arquivo JavaScript ao arquivo HTML, pode acessar os elementos do DOM (Document Object Model) utilizando o JavaScript para manipular os elementos da página de forma dinâmica.

Seu objetivo é criar uma tag `<h1>` com um título qualquer no seu arquivo "index.html" e usar o JavaScript para acessar esse elemento e modificar o texto dele.

Uma dica que pode ajudar é usar o `document.querySelector` para acessar o elemento e o `innerHTML` para modificar o texto.

**Resposta:**
Arquivos criados dentro da pasta.

