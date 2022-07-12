(()=>{
    const retirarDinero = (montoRetirar: number): Promise<number> => {

        let dineroActual = 1000;

        return new Promise( (resolve, rejet )=>{
            if ( montoRetirar > dineroActual ){
                rejet('fondos insuficientes');
            } else {
                dineroActual -= montoRetirar;
                resolve( dineroActual );
            }
        });
    }

    retirarDinero( 250 )
        .then( montoActual => console.log(`Me quedan ${ montoActual }`))
        .catch( console.warn )
    })();