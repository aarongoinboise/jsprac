const express = require("express")
const app = express()

const { sum } = require('./operations.js')
//TODO: uncomment the next line
const { subtract } = require('./operations.js')

const { fibonacci } = require('./operations.js')

// go to http://localhost:3000/ to see this message
app.get('/', (req, res) => {
    res.send('You\'re using JavaScript')
});

// go to http://localhost:3000/about to see this message
app.get('/about', (req, res) => {
    //this message should be displayed in the console that was used to start the server
    console.log("A new request for the route '/about' received at " + new Date());

    res.send('This could be the about page...')
});

// go to http://localhost:3000/api/operations/sum/3/5 to call this method and see the result 8
// go to http://localhost:3000/api/operations/sum/3/asdf to call this method and see an error message
app.get('/api/operations/sum/:first_value/:second_value', (req, res) => {
    console.log("Executing the method for the route '/api/operations/sum/:first_value/:second_value'")
    console.log(`req.params.first_value  = ${req.params.first_value}`);
    console.log(`req.params.second_value = ${req.params.second_value}`);

    let a = Number(req.params.first_value);
    let b = Number(req.params.second_value);
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);

    if (isNaN(a)) {
        res.status(400).send(`BAD REQUEST: req.params.first_value='${req.params.first_value}' is not a number`);
        return
    }

    if (isNaN(b)) {
        res.status(400).send(`BAD REQUEST: req.params.second_value='${req.params.second_value}' is not a number`);
        return
    }

    let result_of_operation = sum(a, b)
    console.log(`result_of_operation = ${result_of_operation}`);

    //the result will be returned as string
    res.send(`${result_of_operation}`);
    // this is equivalent to
    // res.status(200).send(`${result_of_operation}`);
});

// go to http://localhost:3000/api/operations/subtract/3/5 to call this method and see the result -2
app.get('/api/operations/subtract/:first_value', (req, res) => {
    console.log("Executing the method for the route '/api/operations/subtract/:first_value'")
    console.log(`req.params.first_value  = ${req.params.first_value}`);
    console.log(`req.params.second_value = ${req.params.second_value}`);

    let a = Number(req.params.first_value);
    let b = Number(req.params.second_value);
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);

    if (isNaN(a)) {
        res.status(400).send(`BAD REQUEST: req.params.first_value='${req.params.first_value}' is not a number`);
        return
    }

    if (isNaN(b)) {
        res.status(400).send(`BAD REQUEST: req.params.second_value='${req.params.second_value}' is not a number`);
        return
    }

    let result_of_operation = subtract(a, b)
    console.log(`result_of_operation = ${result_of_operation}`);

    //the result will be returned as string
    res.send(`${result_of_operation}`);
    // this is equivalent to
    // res.status(200).send(`${result_of_operation}`);
});

// go to http://localhost:3000/api/operations/fibonacci/5 to call this method and see the result 3
app.get('/api/operations/fibonacci/:first_value', (req, res) => {
    console.log("Executing the method for the route '/api/operations/fibonacci/:first_value'")
    console.log(`req.params.first_value  = ${req.params.first_value}`);

    let a = Number(req.params.first_value);
    console.log(`a = ${a}`);

    if (isNaN(a)) {
        res.status(400).send(`BAD REQUEST: req.params.first_value='${req.params.first_value}' is not a number`);
        return
    }

    let result_of_operation = fibonacci(a)
    console.log(`result_of_operation = ${result_of_operation}`);

    //the result will be returned as string
    res.send(`${result_of_operation}`);
    // this is equivalent to
    // res.status(200).send(`${result_of_operation}`);
});

// go to http://localhost:3000/mission to see this message
app.get('/mission', (req, res) => {
    //this message should be displayed in the console that was used to start the server
    console.log("A new request for the route '/mission' received at " + new Date() + "at the time of " + console.time);

    res.send('Our mission is to access the internet and do math problems.')
});

module.exports = app
