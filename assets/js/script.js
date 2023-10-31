const botao = document.getElementById('meuBotao');
const form = document.querySelector('.form');
const resultado = document.querySelector('.results');
const peso = form.querySelector('.peso');
const altura = form.querySelector('.altura');
const imc=peso/(altura**altura);


botao.addEventListener('onclick', () => {
    alert('Botão clicado!');
});
  