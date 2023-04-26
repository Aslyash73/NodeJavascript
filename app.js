
require('colors');

const {
    inquirerMenu,
    pausa,
    leerInput
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main =  async  () => {

inquirerMenu();

let opt = '';
const tareas = new Tareas();

do {
    //Imprimir el menu
    opt = await inquirerMenu();
    
        switch(opt){
            case '1':

            const desc = await leerInput('Descripción:');
            tareas.crearTarea( desc);

            break;

            case '2':
                console.log(tareas.listadoArr);
                break;
        }

    //para opciones controladas con un switch
   
    // const tarea = new Tarea('Comprar Comida');
   

    await pausa();


} while(opt !== '0');

//  pausa();

}
 main();