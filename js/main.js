const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputIdade = e.target.querySelector('#idade');

    const idade = Number(inputIdade.value)
    if (!idade) {
        setResultado('Idade invalida', false);
        return;
    };
    
    const ano = getAno(idade);

    const msg = `Seu ano de nascença é ${ano}, se vc tiver ${idade} anos`;
    setResultado(msg, true);
});

function getAno (idade) {
    const data = new Date()
    const ano = data.getFullYear() - idade;
    return ano;
}

function criaP () {
    const p = document.createElement('p');
    return p;
};

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
      p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
};


