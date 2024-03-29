import express from "express";
import cors from "cors";
import conectarDB from "./config/db.js";
import dotenv from 'dotenv';

import prePegistroRoutes from './routes/aspirantesRoutes.js';
import usersRoutes from './routes/usuariosRoutes.js';



const app= express();
app.use(express.json());


dotenv.config();

conectarDB();


/* const dominiosPermitidos = [process.env.FRONTEND_URL, 'http://localhost:3000'];
const corsOptions = {
    origin: function(origin, callback) {
        if(dominiosPermitidos.indexOf(origin) !== -1) {
            // El origen permitido del Request
        callback(null, true)
        } else {
            callback(new Error('No permitido por CORS'));
        }
    }
}
app.use(cors(corsOptions)); */


app.use('/api/pre-register', prePegistroRoutes);
//app.use('/api/register-user',usersRoutes);



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
console.log(`Servidor funcionando en el puerto ${PORT}`)
});

