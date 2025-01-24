const botao = document.getElementById("botao");
const campo = document.getElementById("input");

botao.addEventListener("click", () =>{
    console.log(campo.value);
    const novo = document.createElement("p");
    novo.innerHTML = campo.value;
})

// Construa dinamicamente cada item da lista com os valores inseridos pelo usuário.