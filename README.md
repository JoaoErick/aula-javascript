# Introdução ao JavaScript
Conteúdo introdutório à linguagem JavaScript desenvolvido através do acompanhamento das aulas disponibilizadas pela Digital Innovation One juntamente com os professores: Prof. Rafael Galleani (Líder Técnico na Global Hitss); Guilherme Cabrini da Silva (Desenvolvedor Front End - Exactaworks).  
https://digitalinnovation.one    

![](https://img-a.udemycdn.com/course/750x422/2575266_c184.jpg)
> Fonte: Udemy (2020)  
-------------

### Conteúdos Abordados 

* Variáveis, Strings e Inteiros.
* Array e Dicionário
* Condicionais, Laços de repetição e Date
* Functions, variáveis locais e globais
* InnerHTML e funcões ligadas às propriedades das tags HTML  
* Tipagem fraca e dinâmica
* Hoisting, closure e currying
* Imutabilidade e funções de primeira classe.
-------------

### Exemplo - Javascript　

```javascript
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!"; //innerHTML coloca o que está entre aspas dentro da tag
    console.log(document.getElementById("agradecimento"));
    alert("Obrigado por clicar!");
} 

function redirecionar(){
    window.open("https://www.youtube.com"); //Abre outra aba
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse aqui!";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
```  
-------------

### Exemplo - HTML code

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Minha página</title>
        <meta charset="utf-8">
        <script type="text/javascript" src="js/main.js"></script>
    </head>
    <body onload="load()">
        <h1>Minha página</h1>
        <button type="button" onclick="clicou()">Clique Aqui</button>
    </body>
</html>
```
### Fim
