const { request, response } = require('express');
const { v4: uiidv4 } = require("uuid");

const express = require('express');

const customers = [];

const app = express();
app.use(express.json())

/**
 * bi - string
 * name - string
 * id - uuid => Identificador universal
 * statement []
 */

app.post("/account", (request, response) => {
    const { bi, name } = request.body;
    const id = uiidv4();

    const customersAlreadyExists = customers.some((customers) => customers.bi === bi)

    if (customersAlreadyExists) {
        return response.status(400).json({ error: "Customer already exists" });
    }

    customers.push({
        bi,
        name,
        id,
        statement: []
    });

    return response.status(201).send();
})


app.get("/statement/:bi", (request, response) => {

    const { bi } = request.params;

    const customer = customers.find((customer) => customer.bi === bi);

    if (!customer) {
        return response.status(400).json({ error: " Customers not found" });
    }

    return response.json(customer.statement);

})

app.listen(3333);
