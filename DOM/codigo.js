var respuesta = document.getElementById('resultado');

function MostrarEnlaces() {
    const enlace  = document.getElementsByTagName('a');
    const boton   = document.getElementById('boton');
    const parrafo = document.getElementById('p1');
    const imagen  = document.getElementById('img1');
    
    var men = '';
    respuesta.innerHTML  = 'url del enlace:' + enlace[0].href +'<p></p>';
    respuesta.innerHTML += 'url del enlace:' + enlace[1].href +'<p></p>';
    respuesta.innerHTML += 'target del enlace: ' + enlace[0].target +'<p></p>';
    respuesta.innerHTML += 'class del boton: ' + boton.className  +'<p></p>';
    respuesta.innerHTML += 'text-align del párrafo: ' + parrafo.style.textAlign +'<p></p>';
    respuesta.innerHTML += 'src de la imagen: ' + imagen.src +'';

    /*
    const i = -1;
    for (const iterator of parrafos) {
        
        i = i + 1;
        respuesta.innerHTML = 'contenido: ' + iterator[i].
    }
    */
}

