(()=>{

    const sumar = ( a:number, b:number): number => a + b;
    
    const nombre= (): string => 'Hola Tachi';

    const obtenerSalario = (): Promise<string> => {
        return new Promise(( resolve, rejet ) => {
            resolve('Mariel');
        });
    }

    obtenerSalario().then( a=> console.log( a ) )
})();    

