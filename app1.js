"use strict";
(() => {
    const sumar = (a, b) => a + b;
    const nombre = () => 'Hola Tachi';
    const obtenerSalario = () => {
        return new Promise((resolve, rejet) => {
            resolve('Mariel');
        });
    };
    obtenerSalario().then(a => console.log(a));
})();
