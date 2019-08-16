module.exports = function (app) {
    app.get("/", (req, res)=>{
        res.send("Hola, estoy en la ruta '/'!");
    });
    app.get("/leon", (req, res)=>{
        res.send("Hola, estoy en la ruta '/leon'!");
    });
    app.post("/leon", (req, res)=>{
        res.send("Hola, estoy en el post '/leon'!");
    });
}