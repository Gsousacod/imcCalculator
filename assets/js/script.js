function meuEscopo(){
    var botao = document.getElementById('meuBotao');
    function recebeEvento(evento){
        const form = document.querySelector('.form');
        const resultado = document.querySelector('.results');
        evento.preventDefault();
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        const imc=parseFloat(peso/(altura**altura));
        
        console.log(peso,altura,imc)
        if (peso===''|| altura===''){
            resultado.innerHTML+='<p>Preencha todos os campos</p>';
        }else if(imc>=40){
            resultado.innerHTML+='<p>Obesidade mórbida III</p>';
           resultado.style.backgroundColor = 'red';
        }else if(imc>=35 && imc<=39.99){
            resultado.innerHTML+='<p>Obesidade severa II</p>';
            resultado.style.backgroundColor = 'yellow';
        }else if(imc>=30 && imc<=34.99){
            resultado.innerHTML+='<p>Obesidade I</p>';
            resultado.style.backgroundColor = 'yellow';
        }else if(imc>=25 && imc<=29.99){
            resultado.innerHTML+='<p>Acima do peso</p>';
            resultado.style.backgroundColor = 'yellow';
        }else if(imc>=18.50&& imc<=24.99){
            resultado.innerHTML+='<p>Normal</p>';
            resultado.style.backgroundColor = 'green';
        }else if (imc >=17 && imc<=18.49){
            resultado.innerHTML+='<p>Abaixo do peso</p>';
            resultado.style.backgroundColor = 'yellow';
        }else if(imc< 17){
            resultado.innerHTML+='<p>Muito abaixo do peso</p>';
            resultado.style.backgroundColor = 'red';
        }
    };
    botao.addEventListener('click', recebeEvento);
};
meuEscopo();