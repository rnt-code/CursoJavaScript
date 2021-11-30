function saludar(nombre) {
    console.log('Hola ' + nombre);
  }
  
  function procesarEntradaUsuario(callback) {
    var nombre = console.log('Por favor ingresa tu nombre.');
    callback(nombre);
  }
  
  procesarEntradaUsuario(saludar('Ramon')); //saluda es una función



  https://www.youtube.com/watch?v=oVeqw1bLOZE