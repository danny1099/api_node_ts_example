import express from 'express';
import cors from 'cors';
import router from './routes/diaries';

/* Define las variables de inicio del servidor */
const PORT = 3001;
const app = express();

/* Define los middlewares de express */
app.use(cors());
app.use(express.json());

/* Define el end point para las peticiones */
app.use('/diaries', router);

/* Inicia el servidor con el evento listen */
app.listen(PORT, () =>
  console.log(`Server is running on port: ${PORT} sucessfully`)
);
