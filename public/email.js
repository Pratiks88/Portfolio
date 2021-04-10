function enviarEmail(){

    var nodemailer = require('nodemailer');

    var nomeRemetente = document.getElementById('formName').value
    var emailRemetente = document.getElementById('formEmail').value
    var assunto = document.getElementById('formMessage').value
    
    var remetente = nodemailer.createTransport({
        host: 'smtp.hostinger.com.br',
        service: 'hostinger',
        port: 587,
        secure: false,
        auth:{
            user: 'portfolio@viniciusalvesdev.com.br',
            pass: 'Vini@1003****'
        }
    });
    
    var emailASerEnviado = {
        from: 'portfolio@viniciusalvesdev.com.br',
        to: 'contato@viniciusalvesdev.com.br',
        cc: 'vini.alv15@hotmail.com',
        subject: 'Contato realizado pelo site pessoal',
        text: 'Mensagem enviada pelo formulário do site de portfólio.\n\n' 
        + 'Nome: ' + nomeRemetente + '\n'
        + 'Email: ' +  emailRemetente + '\n'
        + 'Assunto: ' + assunto + '\n'
    }    
    
    remetente.sendMail(emailASerEnviado, function(error){
        if(error){
            console.log(error);
        }else{
            console.log('Email enviado com sucesso!')
        }
    });    
    }

    function placeOrder(form){
        form.submit(
            
        );
        }