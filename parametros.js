var express = require("express");
var app = express();

app.get("/Ola/:nome/:projetos/:parceiros/:news", function (req, res)
{
    res.send("<h1>Olá " + req.params.nome + "</h1>"+"<p>Nessa pagina falaremos um pouco sobre nossos " + req.params.projetos + "</p>"+"<p>Nosso colaboradores também serão destacados como " + req.params.parceiros + "<p> Além das nossas ineditas " + req.params.news + "sobre a produção dos projetos</p>");
})


app.listen(8090, function(){
    console.log ("Servidor rodando na url http:localhost:8090")
});