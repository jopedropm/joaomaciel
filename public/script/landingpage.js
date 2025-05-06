const jp = "João Pedro";
const frase = document.querySelector('#p1')
const titulo = document.querySelector('h1')
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 70 *i)    
    })
}

typeWriter(frase);
typeWriter(titulo);