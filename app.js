"use strict";
(() => {
    let miFuncion = function (a) {
        return a;
    };
    const miFuncionF = (a) => a.toUpperCase;
    const sumarN = function (a, b) {
        return a + b;
    };
    const sumarNN = (a, b) => a + b;
    const hulk = {
        nombre: 'Hulk',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} smash!!`);
            }, 1000);
        }
    };
    hulk.smash();
})();
