import { model , schema } from 'mongoose';

const employeSchema = schema({

    cod:{
        type: String,
        required: [true , "Se necesita el codigo del empleado"],
    },

    name:{
        type: String,
        required: [true , "Se necesita el nombre del empleado"],
    },

    first_surname:{
        type: String,
        required: [true , "Se necesita el primer apellido del empleado"],
    },

    second_surname:{
        type: String,
        required: [true , "Se necesita el segundo apellido del empleado"],
    },

    dep_code:{
        type: String,
        required: [true , "Se necesita el codigo del departamento al que pertenece el empleado"],
    }

});

export default model('employesModel', employeSchema);