//Express init
import express from 'express';
const app = express();
const port = 3333;
app.use(express.json());

//Cartelle pubblihe
app.use(express.static("public"));

//Importiamo le rotte
import postRouter from './routers/posts.js';

//Importiamo handleError
import handleError from './middleware/handleError.js';

//Includiamo le rotte
app.use("/posts", postRouter);

//Registriamo handleError
app.use(handleError);

app.listen (port,()=>{
    console.log("Ascolto mode ON");
});
