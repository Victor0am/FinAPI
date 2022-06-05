const express = require('express');

const app = express();


app.use(express.json());

/**
 * GET - Buscar uma info no servidor
 * POST - Criar uma nova info no servidor
 * PUT - Atualizar uma info no servidor
 * DELETE - Deletar uma info no servidor
 * PATCH - Atualizar parcialmente uma info no servidor
*/

/**
 * Tipos de Parametros
 * 
 * Route Params => Identificar um recurso para editar/deletar/buscar 
 * ex: /users/:id
 * 
 * Query Params => Paginação, filtros, ordenação
 * ex: /users?page=2&sort=name
 * 
 * Body Params => Dados para criação/atualização de um registro
 * ex: /users body -> json -> {name: 'Victor', email: 'victoramarques@hotmail.com'}
 * 
*/

app.get('/', (request, response) => {
    return response.json({message: "Hello World, this is my first API :D"});
})

app.listen(3333);