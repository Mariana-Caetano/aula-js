//var nome = "Mariana Caetano";
//var idade = 5;
//var idade2 = 2;
//var soma = idade + idade2
//var frase = "BTS Fanchant"

//alert(nome +" tem " + idade + " anos.");
//alert(idade + " + " + idade2 + " = " + soma);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toLowerCase());
//console.log(frase.replace("Fanchant" , "is " + soma + " years old"))
//alert(frase.replace("Fanchant" , "is great!"));


//Array:

//var lista = ["maçã", "uva", "melância"];
//lista.push("laranja") //add another element on the list. 
//lista.pop(); //retira o último item da lista
//console.log(lista);

//console.log(lista.length); //elements quantity on the list
//console.log(lista.reverse()); //reverse the elements on the list
//console.log(lista.toString());
//console.log(lista.join(" | ")); //it shows which type of separation will appear
//console.log(lista[2]); //only the position 2 will be printed
//alert(lista[2] + " é a fruta escolhida"); 


//Dictionary

//var fruta = [{nome:"banana", cor:"amarela"}, {nome:"uva", cor:"roxa"}]
//console.log(fruta);
//alert(fruta[1].nome);
//console.log(fruta.nome); //brings only the name
//alert(fruta.cor + " é a cor da " + fruta.nome);


//Conditionals, loop and date

/*var idade = prompt("Qual a sua idade?"); // o comando prompt exibe uma pergunta e o que ele responder fica gravado na var 

if (idade >= 18) {
    alert("você é maior de idade");
} else {
    alert("você é menor de idade");
};*/


//Loop

/*var count = 0;
while (count < 5) {
    console.log(count);
    count = count + 1 //ou count++
};*/

/*var count;
for(count = 0; count <= 5; count ++){
    alert(count);
};*/



//Date

//var data = new  Date();
//alert(data);  //mostra data e hora
//alert(data.getMonth()+1);
//alert(data.getHours()+1);
//alert(data.getSeconds()+1);

//Functions

function botao() {
    document.getElementById("thanks").innerHTML = "<b>Obrigada por clicar!</b>";
    //console.log(document.getElementById("thanks"));
    //alert("Obrigada por clicar!");
}

/*function soma(n1, n2) {
    return n1 + n2
}

function validaIdade(idade) {
    var validar ;
    if(idade >= 18){
        validar = true
    }else{
    validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?")
console.log(validaIdade(idade));

//alert(soma(5, 10));*/
