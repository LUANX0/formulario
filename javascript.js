/**Jquery mask para validação de cpf e data */
$(document).ready(function(){
    $('#data').mask('00/00/0000');

    $('#cpf').mask('000.000.000-00', {reverse: true});
})

/**função para validar cpf nome e email */
function confirmacao() {
    var vSenha = document.form.senha.value;
    var repSenha = document.form.confirmarSenha.value;
    if(document.form.cpf.value=="" || document.form.cpf.value.length <14) {
        $.notify({
            message: 'Cpf inválido.'
        },{
            type: 'danger'
        });
        document.form.cpf.focus();
       return false;
    }
    if(document.form.nome.value=="") {
        $.notify({
            message: 'Digite um nome.'
        },{
            type: 'danger'
        });
        document.form.nome.focus();
       return false;
    }
    if(document.form.email.value=="" || document.form.email.value.indexOf('@')==-1 || document.form.email.value.indexOf('.')==-1) {
        $.notify({
            message: 'Digite um email válido.'
        },{
            type: 'danger'
        });
        document.form.email.focus();
        return false;
    }
    if(document.form.data.value=="" || document.form.data.value.length <10) {
        $.notify({
            message: 'Digite uma data existente.'
        },{
            type: 'danger'
        });
        document.form.data.focus();
       return false;
    }
    if (document.form.senha.value.length <6) {
        $.notify({
            message: 'A senha deve ter no minimo 6 caracteres.'
        },{
            type: 'danger'
        });
        document.form.senha.focus();
        return false;
    }
        if (vSenha != repSenha) {
            $.notify({
                message: 'As senhas devem ser iguais.'
            },{
                type: 'danger'
            });
          document.form.senha.focus();
          return false;
        }
        $.notify({
            // options
            message: 'cadastro concluido ' 
            },{
            // settingss
            type: 'success'
            });
               return false
}
                                    
/**função para validar data*/
function VerificaData(digData) {	
    var bissexto = 0;	
    var data = digData; 	
    var tam = data.length;	
    if (tam == 10) 	{		
        var dia = data.substr(0,2)		
        var mes = data.substr(3,2)		
        var ano = data.substr(6,4)		
        if ((ano > 1900)||(ano < 2100)) {			switch (mes) {				
        case '01':				
        case '03':				
        case '05':				
        case '07':				
        case '08':				
        case '10':				
        case '12':					
        if  (dia <= 31) {						return true;					
        }					
        break;								
        case '04':						
        case '06':				
        case '09':				
        case '11':					
        if  (dia <= 30) {						return true;					
        }					
        break;				
        case '02':					
        /* Validando ano Bissexto / fevereiro / dia */ if ((ano % 4 == 0) || (ano % 100 == 0) || (ano % 400 == 0)) 	{ 						bissexto = 1; 	
        } 					
        if ((bissexto == 1) && (dia <= 29)) { 		return true;				 				
        } 					
        if ((bissexto != 1) && (dia <= 28)) { 		return true; 					
        }								
        break;									
    }		
}	
}

$.notify({
    message: 'Digite uma data existente.'
},{
    type: 'danger'
});
document.form.data.focus();
return false;
}