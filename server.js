var express = require('express');
var app = express();

var PORT = process.env.PORT || 8081;

app.get('/status', function (req, res) {
        res.set('Content-Type', 'application/json');
        res.end('{"status": {"message": "Servicio funcionando correctamente!"}}');
})

app.get('/sum', function (req, res) {
        var num1 = parseInt(req.query.num1);
        var num2 = parseInt(req.query.num2);
        var result = num1 + num2;
        res.set('Content-Type', 'application/json');
        res.end('{"result": {"operation": "' +num1+"+"+num2+'", "result":'+result+'}}');
})

server = app.listen(PORT, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("The magic happens here! Server listening at http://%s:%s", host, port)


})
