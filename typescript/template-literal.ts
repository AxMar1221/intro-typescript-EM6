(()=>{
    function getEdad() {
        return 100 + 100 + 300;
    }
    
    const nombre = 'Tachi';
    const apellido = "Dito";
    const edad = 39;

    // const salida = nombre + " " + apellido + " " + edad 
    const salida = `
    ${nombre}
    ${apellido}
    ( ${ getEdad() } )`;
    console.log( salida );
    // Tachi Dito ( edad: 39 )

})();

