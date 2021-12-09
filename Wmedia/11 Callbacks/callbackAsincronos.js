//calback hell


url1 = 'https://i.blogs.es/07fc5b/el-libro-de-imagenes-3/1366_2000.png'

url2 = 'https://freesound.org/people/szegvari/sounds/610996/download/610996__szegvari__long-time-waiting-strings-string-solo-orchestra-orchestral-sad-dark-mood-drama-synth-atmo-music-surround.wav'

//setTimeout
/*
saludo = function(){
    console.log('Hola Mundo; esto se ejecuta un tiempo después');
}

setTimeout(saludo,5000);
console.log('Esto se ejecuta primero');
*/

//ejemplo de tarea asincrona
const URL = "wmedia.es/juan.jpg";

function descargar(url, fn) {
    console.log("...descargando: " + url);

    setTimeout(() => {
        console.log("Descargado: " + url);
        fn(url);
    }, 3000);
}

/*
function procesar(archivo) {
    console.log("Procesando...." + archivo);
}
*/

descargar(URL, (archivo) => console.log("Procesando...." + archivo));
