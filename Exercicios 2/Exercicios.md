# Faça como eu fiz:

* Armazene um botão de salvar em uma variável.

**Resposta:**
```html
<button id="botao">Clique</button>
```
```javascript
const botao = document.getElementById("botao");
console.log(botao)
```
---
* Capture o valor do campo de digitação.

```html
<input id="input" type="text"/>
```

```javascript

const campo = document.getElementById("input");
campo.addEventListener('keydown', (evento) => {
    if(evento.key === "Enter"){
        evento.preventDefault()
        alert("Enter");
        console.log(evento);
    }else{
        evento.preventDefault()
        alert("Outra tecla")
    }
})
```
---
* Evite o comportamento padrão de envio do formulário.

```javascript
evento.preventDefault()
```
*** Esse preventDefault() vai evitar o envio do formulário quando "Enter" for pressionado, e o código que vem depois vai ser executado normalmente. Testa aí e me avisa como ficou!

---
* Impeça que itens vazios sejam adicionados à lista.

```html
<input id="input" type="text"/>
```
```javascript
const campo = document.getElementById("input");
campo.addEventListener('keydown', (evento) => {
    if(campo.value === ""){
        alert("Vazio");
    }else{
        console.log(campo.value);
        alert("Cheio")
    }
})
```
---

* Construa dinamicamente cada item da lista com os valores inseridos pelo usuário.

---