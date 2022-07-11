(()=>{

    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan América',
        poder: 'Droga'
    }

    const extraer = ( {nombre, poder}: any ) => {

        // const {nombre, clave} = avenger;

        console.log(nombre);
        console.log(poder);
    } 
    // extraer( avenger );
    const avengers: string[] = ['Spiderman', 'Antman', 'MsMarvel']

    const [ , , Gwen ] = avengers;

    const extraerArr = ( [spiderman, antman, MsMarvel]: string[] ) => {

        console.log( spiderman);
        console.log( antman);
        console.log( MsMarvel );
    }

    extraerArr( avengers );

})();

