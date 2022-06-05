const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();


app.use(express.json());

const customers = []; 


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


// criar uma conta -> ela não pode ser criada com um cpf que já foi usado para criar uma 
// conta anteriormente
/**
 * cpf - string (parametro do body)
 * name - string (parametro do body)
 * id - uuid -> usando uuid (uuid)
 * statement []
 */

app.post('/account', (request, response) => {
    const {cpf, name} = request.body;

    const customerAlreadyExists = customers.find(customer => customer.cpf === cpf);

    if(customerAlreadyExists){
        return response.status(400).json({error: 'Customer already exists.'});
    }




    customers.push({
        cpf, name, id: uuidv4(), statement: []
    });


    return response.status(201).send();

})


app.listen(3333);