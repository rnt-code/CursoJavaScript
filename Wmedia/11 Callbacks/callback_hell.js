//pyramyd of doom

const URL1 = "wmedia.es/juan.jpg";
const URL2 = "wmedia.es/guizmo.jpg";
const URL3 = "wmedia.es/nimo.jpg";
const URL4 = "wmedia.es/moma.jpg";

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

//callback hell or pyramid of doom
descargar(URL1, (archivo) => {
    console.log("Procesando...." + archivo);
    descargar(URL2, (archivo) => {
        console.log("Procesando...." + archivo);
        descargar(URL3, (archivo) => {
            console.log("Procesando...." + archivo);
            descargar(URL4, (archivo) => {
                console.log("Procesando...." + archivo);
            });
        });
    });
});

//esto se mejora con las promise de js, y mejor aún con async await
