"use strict";
(() => {
    class Avenger {
        // nombre: string;
        // equipo: string;
        // nombreReal:  string;
        // puedePelear: boolean;
        // peleasGanadas: number;
        constructor(nombre, equipo, nombreReal, puedePelear = true, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger('Capitan América', 'Capi', 'Steve');
    console.log(antman);
})();
// class Avenger {
//     nombre: string;
//     equipo: string;
//     nombreReal?:  string;
//     puedePelear?: boolean;
//     peleasGanadas?: number;
//     constructor( nombre: string, equio: string) {
//         this.nombre = nombre;
//         this.equipo = equio;
//     }
// }
// const antman: Avenger = new Avenger( 'Antman', 'Capi');
// console.log( antman );
