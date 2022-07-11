"use strict";
(() => {
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan América',
        poder: 'Droga'
    };
    const extraer = ({ nombre, poder }) => {
        // const {nombre, clave} = avenger;
        console.log(nombre);
        console.log(poder);
    };
    // extraer( avenger );
    const avengers = ['Spiderman', 'Antman', 'MsMarvel'];
    const [, , Gwen] = avengers;
    const extraerArr = ([spiderman, antman, MsMarvel]) => {
        console.log(spiderman);
        console.log(antman);
        console.log(MsMarvel);
    };
    extraerArr(avengers);
})();
