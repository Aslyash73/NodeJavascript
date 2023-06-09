
require('colors');

const { guardarDB, leerDB} = require('./helpers/guardarArchivo');
const {
    inquirerMenu,
    pausa,
    leerInput
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');




const main =  async  () => {

let opt = '';
const tareas = new Tareas();

const tareasDB = leerDB();

if(tareasDB){
       tareas.cargarTareasFromArray(tareasDB);
}

do {
    //Imprimir el menu
    opt = await inquirerMenu();
    
        switch(opt){
            case '1':

            const desc = await leerInput('Descripción:');
            tareas.crearTarea( desc);

            break;

            case '2':
                tareas.listadoCompleto();
            break;
            case '3':
                tareas.listarPendientesCompletadas(true);
            break;
            case '4':
                tareas.listarPendientesCompletadas(false);
            break;
        }

         guardarDB(tareas.listadoArr);

    //para opciones controladas con un switch
   
    // const tarea = new Tarea('Comprar Comida');
   

    await pausa();
     inquirerMenu();

} while(opt !== '0');

   pausa();

}
 main();