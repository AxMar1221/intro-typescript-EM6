"use strict";
(() => {
    console.log('inicio');
    const prom1 = new Promise((resolve, rejet) => {
        setTimeout(() => {
            rejet('se termino el timeout');
        }, 1000);
    });
    prom1
        .then(mensaje => console.log(mensaje))
        .catch(err => console.warn(err));
    console.log('fin');
})();
