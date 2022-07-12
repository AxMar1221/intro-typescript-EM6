(()=>{
    class Avenger {
        // nombre: string;
        // equipo: string;
        // nombreReal:  string;
        
        // puedePelear: boolean;
        // peleasGanadas: number;
        
        constructor( public nombre: string,
                     public equipo:string,
                     public nombreReal?: string,
                     public puedePelear: boolean = true,
                     public peleasGanadas: number = 0 ){}
    }
    const antman: Avenger = new Avenger( 'Capitan América','Capi', 'Steve' );
    console.log( antman );
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