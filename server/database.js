const mongoose = require('mongoose');

//Configuración de los parametros de la base de datos
uri= 'mongodb+srv://christiansilv12:Chris123@cluster0.negzq.mongodb.net/Empleados?retryWrites=true&w=majority';
dbparams ={
    //useCreateIndex: true,
    useNewUrlParser:true,
    //useFindAndModify:false,
    useUnifiedTopology:true
};

mongoose.connect(uri, dbparams)
        .then(db=> console.log('DB esta conectada'))
        .catch(err=>console.log(err));

module.exports = mongoose;
