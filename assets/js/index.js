const form = document.querySelector('.form');

form.addEventListener('click', function (e){
    e.preventDefault();
    console.log('Evento previnido.');
    setResultado('Olá mundo!');
});
function criaP(){
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    p.innerHTML = 'Qualquer coisa';
}
function setResultado(){
    const resultado = document.querySelector('.results');
    resultado.innerHTML = '';
    resultado.appendChild(p);
}