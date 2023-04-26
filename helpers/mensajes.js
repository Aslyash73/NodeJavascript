const { resolve } = require('path');


require('colors');


const mostrarMenu = () => {

        return new Promise( resolve => {

            console.clear();
            console.log('==========================='.red);
            console.log('seleccione una opcion 💕'.white)
            console.log('===========================\n'.red);
        
            console.log(`${'1.'.magenta} Crear tareas`);
            console.log(`${'2.'.magenta} Listar tareas`);
            console.log(`${'3.'.magenta} Listar tareas completadas`);
            console.log(`${'4.'.magenta} Listar tareas pendientes`);
            console.log(`${'5.'.magenta} Completar tareas`);
            console.log(`${'6.'.magenta} Borrar tareas`);
            console.log(`${'0.'.magenta} Salir\n`);
        
            const readline = require ('readline').createInterface({
                input:process.stdin,
                output: process.stdout
            });
        
            readline.question('Seleccione una opcion: ', (opt)=>{
                readline.close();
                resolve(opt);
            })


        })

}

const pausa = ()=> {

    return new Promise(resolve => {

        const readline = require ('readline').createInterface({
            input:process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${'ENTER'.blue}:para continuar\n` , (opt)=>{
            readline.close();
            resolve();
        })

    })

}

module.exports = {
    mostrarMenu,
    pausa
}