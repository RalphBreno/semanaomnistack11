const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//PAREI EM 1:04 minutos

//rotas / recursos
//request guarda todos os dados da requisição. response é o responsável por retornar uma resposta pro usuário. 

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma informação do back-end
 * 
*/

/**
  * Tipos de parâmetros:
  * 
  * Query params: parâmetros nomeados enviados na rota após "?" (Filtros, paginação) -> query
  * Route params: Parâmetros utilizados para identificar recursos -> params
  * Request Body: Corpo da requisição, utilizado para criar ou alterar rcursos -> body
  * 
*/

/**
 * SQL: MySQL SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc. (não relacionais) 
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where()
*/

app.listen(3333);
