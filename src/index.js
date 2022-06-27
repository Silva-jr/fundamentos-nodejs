const { request, response } = require('express');
const express = require('express');

const app = express();
app.use(express.json())

/**
 * Get - Buscar uma informacao
 * Post - Inserir uma informacao
 * Put - Alterar uma informacao
 * Patch Alterar uma informacao especifica
 * Delete - Deletar uma informacao 
 */


/**
 * tipos de parâmetros
 * 
 * Router Params => Identificar um recurso editar/deletar/buscar
 * Query Params => Paginacao /filtro
 * Body Params => Os objetos insercao/alteracao (JSON)
 */

//funcao get, passamos dois parametros:
//Request-> Tudo que a nossa app recebe
//Response-> Tudo que a nossa retorna
app.get("/", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
})


app.post("/courses", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

app.put("/courses/:id", (request, response) => {
    return response.json(["Curso 1", "Curso 5", "Curso 3", "Curso 4"])
})

app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 6", "Curso 4"])
})

app.delete("/course/:id", (request, response) => {
    return response.json(["Curso 2", "Curso 6", "Curso 4"])
})

//Funcao que passa a porta onde o projecto vai rodar
app.listen(3333);