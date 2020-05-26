/*------- AULA 001

var nome = "João Erick Barbosa";
var idade = 19;
var idade2 = 10;
var frase = "Japão é melhor time do mundo";
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2); //tipagem dinâmica entende que são inteiros pela ausência de aspas.
console.log(nome);
console.log(idade + idade2); //Observar os resultados no Console do 'inspecionar elemento'.
console.log(idade * idade2);
console.log(frase);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase()); //Todas as letras maiúsculas
console.log(frase.toLowerCase()); //Todas as letras minúsculas
//alert(frase.replace("Japão", "Brasil"));
*/

/*------- AULA 002 

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva"); //Adiciona o item na lista
//lista.pop(); //Remove o último elemento da lista
//console.log(lista);
//console.log(lista.length); //Quantos elementos na lista
//console.log(lista.reverse()); //Inverte a ordem dos elementos
//console.log(lista.toString()); //Transforma a lista numa string
//console.log(lista.toString()[0]); //Acessa a primera letra da string
//console.log(lista.join(" - ")); //Transforma a lista em string e os elementos são separados pela ' - '
//console.log(lista[1]);
//alert(lista[1]);

//var fruta = {nome: "maçã", cor:"vermelha"} //Dicionário
//var fruta = [{nome: "maçã", cor:"vermelha"}, {nome: "uva", cor:"roxa"}] //lista de dicionários
//console.log(fruta);
//console.log(fruta.nome); 
//alert(fruta[1].nome);
*/

/*------- AULA 003
//var idade = 18;
//var idade = prompt("Qual a sua idade?"); //Lê o que o usuário digitar

//if(idade >= 18){
//    alert("Maior de idade.");
//}
//else{
//    alert("Menor de idade.");
//}

//var count = 0;
//while(count <= 5){
//    console.log(count);
//    count++;
//}

//var count;
//for(count=0; count <= 5; count++){
//    alert(count);
//}

//var d = new Date();
//alert(d);
//alert(d.getMonth()+1); //'+1 usado porque getMonth começa em 0'
//alert(d.getDate());
//alert(d.getHours());
//alert(d.getMinutes());
*/

/*------- AULA 004 
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

//var validar; //variavel fora da função
//function validaIdade(idade){
//    var validar; //variavel local | Se apagar essa linha, será o usado a variavel fora da função (global)
//    if(idade >= 18){
//       validar = true;
//    }
//    else{
//        validar = false;
//    }
//    return validar;
//}

//var idade = prompt("Qual a sua idade?");
//console.log(validaIdade(idade));

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*------- AULA 005 
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!"; //innerHTML coloca o que está entre aspas dentro da tag
    //document.getElementById("agradecimento");
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
} 

function redirecionar(){
    //window.open("https://www.youtube.com"); //Abre outra aba
    //window.location.href = "https://www.youtube.com" //Abre na própria aba
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse aqui!";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse aqui!";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
*/