// Configuración del servidor 
// 1. Importar dependencias y módulos
import express from "express"; // Importa el módulo Express.
import dotenv from "dotenv";
import cors from "cors";


// 2. Hacer las configuraciones necesarias en el proyecto
const app = express(); // Crea una aplicación de Express con la que puedo empezar a construir mi servidor.
dotenv.config(); // Lee el archivo .env y carga las variables de entorno en el objeto process.env, permitiendo acceder a ellas en el código.
app.use(cors()); // cors -> middlewares -> intermediarios en el código (mesero)
// - Esto es especialmente útil en aplicaciones que tienen un frontend y un backend separados, ya que te asegura que el frontend pueda interactuar con tu API sin problemas.
// Resumen de CORS -> Facilita la comunicación entre el servidor y el cliente que se encuentren en diferentes dominios.

// 3. Escuchar el servidor para poder ejecutar el app.js
app.listen(port, ()=> {
    console.log(`El puerto se está escuchando en: http://localhost:${port}`);
})