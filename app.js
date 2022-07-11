"use strict";
(() => {
    function activar(quien, momento, objeto = 'Batiseñal') {
        if (momento) {
            console.log(`${quien} activó la ${objeto} en la ${momento}`);
        }
        else {
            console.log(`${quien} activó la ${objeto}`);
        }
    }
    activar('Gordon');
})();
