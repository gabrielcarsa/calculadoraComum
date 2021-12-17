let display = document.querySelector('#display'); //lugar onde é mostrado os números
let errors = document.querySelector('#errors'); //lugar onde é mostrado os erros

let operacao = false; //Variável que validará o display, quando 'true' será apresentado erro na tela

//Mostrar os números no display
const mostrarCampos = x => {
    display.style.color = "rgb(0, 0, 0)";//reinicia cor para preto

    //Não permitir que adicione 1º uma operação do que um número
    if (display.innerText.length == 0 && x == '+') {
        errors.innerHTML = "Insira algum número primeiro";
    }
    else if (display.innerText.length == 0 && x == '-') {
        errors.innerHTML = "Insira algum número primeiro";
    }
    else if (display.innerText.length == 0 && x == '*') {
        errors.innerHTML = "Insira algum número primeiro";
    }
    else if (display.innerText.length == 0 && x == '/') {
        errors.innerHTML = "Insira algum número primeiro";
    }

    //Valida se o usuário não vai colocar duas operações sem um número no meio. Ex.: 9+*10 
    else if (x == '+' && operacao == true) {
        errors.innerHTML = "Insira um número depois uma operação matemática!"; //apresenta o erro
    }
    else if (x == '+' && operacao == false) {
        display.innerHTML += x; //add no display
        operacao = true;//já foi add uma operação, agora precida add algum número
        errors.innerHTML = "";//esvazia os erros
    }
    else if (x == '-' && operacao == true) {
        errors.innerHTML = "Insira um número depois uma operação matemática!";
    }
    else if (x == '-' && operacao == false) {
        display.innerHTML += x;
        operacao = true;
        errors.innerHTML = "";
    }
    else if (x == '*' && operacao == true) {
        errors.innerHTML = "Insira um número depois uma operação matemática!";
    }
    else if (x == '*' && operacao == false) {
        display.innerHTML += x;
        operacao = true;
        errors.innerHTML = "";
    }
    else if (x == '/' && operacao == true) {
        errors.innerHTML = "Insira um número depois uma operação matemática!";
    }
    else if (x == '/' && operacao == false) {
        display.innerHTML += x;
        operacao = true;
        errors.innerHTML = "";
    }

    //Verifica se existe potencia e suas validações
    else if (x.includes('pot') && display.innerText.length == 0) {//verifica se o display não esta vazio antes de executar o calculo
        errors.innerHTML = "Insira um número primeiro!";
    }
    else if (x.includes('pot') && display.innerText.includes('+')) {
        errors.innerHTML = "A potência ao quadrado só pode ser realizada com ela mesma, sem outras operações!";
    }
    else if (x.includes('pot') && display.innerText.includes('-')) {
        errors.innerHTML = "A potência ao quadrado só pode ser realizada com ela mesma, sem outras operações! E também não pode ter um valor negativo!";
    }
    else if (x.includes('pot') && display.innerText.includes('*')) {
        errors.innerHTML = "A potência ao quadrado só pode ser realizada com ela mesma, sem outras operações!";
    }
    else if (x.includes('pot') && display.innerText.includes('/')) {
        errors.innerHTML = "A potência ao quadrado só pode ser realizada com ela mesma, sem outras operações!";
    } else if (x.includes('pot')) {
        potencia();//Chama a função que realizará o calculo da potencia ao quadrado
    }

    //Verifica se existe fatorial e suas validações
    else if (x.includes('fat') && display.innerText.length == 0) {
        errors.innerHTML = "Insira um número primeiro!";
    }
    else if (x.includes('fat') && display.innerText.includes('+')) {
        errors.innerHTML = "O fatorial só pode ser realizada com ela mesma, sem outras operações!";
    }
    else if (x.includes('fat') && display.innerText.includes('-')) {
        errors.innerHTML = "O fatorial só pode ser realizada com ela mesma, sem outras operações! E também não pode ter um valor negativo!";
    }
    else if (x.includes('fat') && display.innerText.includes('*')) {
        errors.innerHTML = "O fatorial só pode ser realizada com ela mesma, sem outras operações!";
    }
    else if (x.includes('fat') && display.innerText.includes('/')) {
        errors.innerHTML = "O fatorial só pode ser realizada com ela mesma, sem outras operações!";
    } else if (x.includes('fat')) {
        fatorial();//Chama a função que realizará o calculo do fatorial
    }

    //Verifica se existe a raiz e suas validações
    else if (x.includes('raiz') && display.innerText.length == 0) {
        errors.innerHTML = "Insira um número primeiro!";
    }
    else if (x.includes('raiz') && display.innerText.includes('+')) {
        errors.innerHTML = "A raiz quadrada só pode ser realizada com ela mesma, sem outras operações!";
    }
    else if (x.includes('raiz') && display.innerText.includes('-')) {
        errors.innerHTML = "A raiz quadrada só pode ser realizada com ela mesma, sem outras operações! E também não pode ter um valor negativo!";
    }
    else if (x.includes('raiz') && display.innerText.includes('*')) {
        errors.innerHTML = "A raiz quadrada só pode ser realizada com ela mesma, sem outras operações!";
    }
    else if (x.includes('raiz') && display.innerText.includes('/')) {
        errors.innerHTML = "A raiz quadrada só pode ser realizada com ela mesma, sem outras operações!";
    } else if (x.includes('raiz')) {
        raiz();//Chama a função que realizará o calculo do fatorial
    }

    //Caso esteja tudo certo, ele apenas acrescentará na tela
    else {
        display.innerHTML += x;
        operacao = false;
        errors.innerHTML = "";
    }
}

//Limpar display
const limpar = () => display.innerHTML = "";


//Apagar último display
const apagar = () => {
    let aux = display.innerHTML;
    display.innerHTML = aux.substring(0, aux.length - 1);
}

//Exibir o resultado no display
const exibirResultado = () => {
    //Valida se o campo não esta vázio para apresentar o resultado
    if (display.innerText.length == 0) {
        errors.innerHTML = "Adicione alguma expressão antes de tentar ver um resultado!"
    } else {
        let exibir = eval(display.innerText); //função que pega os valores que estão no display e os calcula
        display.style.color = "rgb(0, 179, 45)"; //muda cor do resultado para verde
        display.innerHTML = exibir;
    }

}

//Calcula potência ao quadrado
const potencia = () => {
    let pot = display.innerText;
    pot = pot.replace("pot", "");//tira a palavra da string para calcular o valor
    let resultado = Math.pow(pot, 2); //função que retorna o valor da potencia 
    display.style.color = "rgb(0, 179, 45)"; //muda cor do resultado para verde
    display.innerHTML = resultado;
}

//Calcula o fatorial
const fatorial = () => {
    let fat = display.innerText;
    fat = fat.replace("fat", "");//tira a palavra da string para calcular o valor
    let aux = fat;
    display.style.color = "rgb(0, 179, 45)"; //muda cor do resultado para verde
    for (let i = 1; i < fat; i++) {
        aux *= i;
    }
    display.innerHTML = aux;
}

//Calcula a Raiz quadrada
const raiz = () => {
    let raiz = display.innerText;
    raiz = raiz.replace("raiz", "");//tira a palavra da string para calcular o valor
    let resultado = Math.sqrt(raiz);//função que retorna o valor da raiz quadrada 
    display.style.color = "rgb(0, 179, 45)"; //muda cor do resultado para verde
    display.innerHTML = resultado;
}
