require('colors');
const inquirer = require ('inquirer');


const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.red} Crear Tarea`
            },
            {
                value: '2',
                name: `${'2.'.yellow} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'1.'.red} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.white} Completar tarea`
            },
            {
                value: '6',
                name: `${'1.'.yellow} Borrar tareas`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            }
        ]        
    }
];

      const pausa = async () => {
        
        const question = [
            {
                type: 'input',
                name: 'enter',
                message: `Presione ${'enter'.green} para continuar`
            }
        ];
        
        console.log('\n');
        await inquirer.prompt(question);

        }

        const leerInput = async(message)=>{
            const question =[
                {
                    type: 'input',
                    name: 'desc',
                    message,
                    validate(value){
                        if(value.length === 0){
                            return 'Por favor ingrese n valor';
                        }
                        return true;
                    }
                }
            ];

                const {desc} = await inquirer.prompt(question);
                return desc;
        }

const inquirerMenu = async() => {
            console.clear();
            console.log('==========================='.red);
            console.log('seleccione una opcion 💕'.white)
            console.log('===========================\n'.red);

        
            const {opcion} = await inquirer.prompt(preguntas);
            return opcion;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}