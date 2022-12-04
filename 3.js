const campos = document.querySelectorAll('.campos');
const alerta = document.querySelectorAll('.alertas');
const spans = document.querySelectorAll('.spans');
const spans2 = document.querySelectorAll('.spans2');
const spans3 = document.querySelectorAll('.spans3');
var submeter = true;

campos[1].addEventListener('keypress', valida_numero);
campos[4].addEventListener('keypress', valida_numero);
campos[5].addEventListener('keypress', valida_numero);
campos[1].addEventListener('keypress', mascaracpf); 

formulario = document.getElementById('formulario');
formulario.addEventListener('submit', submeterr);

function submeterr(event) {
    valida_nome();
    valida_cpf();
    valida_email();
    valida_login();
    valida_senha();
    valida_confirma();
    compara_senhas();
    numero_senhas();
    if (submeter == false) {
        alert("Preencha todos os Campos!");
        event.preventDefault();
    }
}




function valida_nome() {
    if(campos[0].value == '') {
        campos[0].style.border = "1px solid red";
        spans[0].style.display = "inline";
        submeter = false;
    } 
    else {
        campos[0].style.border = "1px solid green";
        spans[0].style.display = "none";
        submeter = true;
    }
}

function valida_cpf() {
    
    if(campos[1].value == '') {
        campos[1].style.border = "1px solid red";
        spans[1].style.display = "inline"
        submeter = false;
    }

    else {
        campos[1].style.border = "1px solid green";
        spans[1].style.display = "none";
        submeter = true;
    }
}

function valida_email() {

    if(campos[2].value == '') {
        campos[2].style.border = "1px solid red";
        spans[2].style.display = "inline";
        submeter = false;
    }

    else {
        campos[2].style.border = "1px solid green";
        spans[2].style.display = "none";
        submeter = true;
    }
}

function valida_login() {

    if(campos[3].value == '') {
        campos[3].style.border = "1px solid red";
        spans[3].style.display = "inline";
        submeter = false;
        
    }

    else {
        campos[3].style.border = "1px solid green";
        spans[3].style.display = "none";
        submeter = true;
    }
}

function valida_senha() {

    if(campos[4].value == '') {
        campos[4].style.border = "1px solid red";
        spans[4].style.display = "inline";
        submeter = false;
    }

    else {
        campos[4].style.border = "1px solid green";
        spans[4].style.display = "none";
        submeter = true;
    }

}

function valida_confirma() {

    if(campos[5].value == '') {
        campos[5].style.border = "1px solid red";
        spans[5].style.display = "inline";
        submeter = false;
    }

    else {
        campos[5].style.border = "1px solid green";
        spans[5].style.display = "none";
        submeter = true;
    }
}

function valida_numero(event) {

    if(event.keyCode < 48 || event.keyCode > 57){

        event.preventDefault() 
    }
}

function numero_senhas() {

    if(campos[4].value.length <6 || campos[4].value.length >9) {
        spans2[0].style.display = "block";
        submeter = false;
    }

    else {
        spans2[0].style.display = "none";
        submeter = true;
    }
    
    if(campos[5].value.length <6 || campos[5].value.length >9) {
        spans2[1].style.display = "block";
        submeter = false;
    }

    else {
        spans2[1].style.display = "none";
        submeter = true;
    }
}

function compara_senhas() {

    if (campos[4].value === campos[5].value) {
        if (campos[4].value != '' && campos[5].value != '') {
            campos[4].style.border = "1px solid green";
            campos[5].style.border = "1px solid green";
            spans3[0].style.display = "none";
            spans3[1].style.display = "none";
            submeter = true;
        }

    }
    else {
        campos[4].style.border = "1px solid red";
        campos[5].style.border = "1px solid red";
        spans3[0].style.display = "block";
        spans3[1].style.display = "block";
        submeter = false;
    }    
}

function mascaracpf(event) {
    if(this.value.length == 3){
		this.value = this.value + ".";
	}
	if(this.value.length == 7){
		this.value = this.value + ".";
	}
    if(this.value.length == 11){
		this.value = this.value + "-";
	}
}




