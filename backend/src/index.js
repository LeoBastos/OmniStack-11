const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);


/* Rotas / Recurso*/

     /* Métodos HTTP:
      * 
      * Get: Buscar/listar uma informação do Back-End
      * Post: Criar uma informação no Back-End
      * Put: Alterar uma informação no Back-End
      * Delete: Deletar uma informação no Back-End
      */

    /**
     * Tipos de Parâmetro:
     * 
     * Query Params: Parametros nomeados enviados na rota, após o simbolo de ?(Servem para filtros, paginação)
     * Route Params: Parametros utilizados para indentificar recursos(unico)
     * Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos.
     * 
     */
     /*
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */
