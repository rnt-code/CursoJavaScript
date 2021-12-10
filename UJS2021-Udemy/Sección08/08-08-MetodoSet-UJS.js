let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    idioma: 'es',
    
    get getIdioma(){
        return this.idioma.toUpperCase();
    },
    
    /**
     * @param {string} idioma
     */
    set setIdioma(idioma){
        this.idioma = idioma.toUpperCase();
    },
    
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.getIdioma);

persona.setIdioma = 'en';//se llama metodo set lang

console.log(persona.getIdioma);//se llama metodo get lang
console.log(persona.idioma);