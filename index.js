const express = require("express");
const logger = require("morgan")//Es un logger, es un middleware, se encarga de loguear las peticiones en la consola
const bodyParser = require("body-parser")//hace parse de ciertos request


const app = express();
app.use(logger((tokens, req,res)=>{
    let val = tokens.url(req,res)
    val =val.split("/")
    val = val[val.length-1]
    if(val ==='leon'){
        console.log('Eres leon')
    }
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ].join('--')
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))//no queremos la verson extendida del middleware
require("./routes/views")(app);
require("./routes/special")(app);

console.log("Iniciando Express.js");
app.listen(3000, ()=>{
    console.log("Express ha iniciado correctamente!");
});