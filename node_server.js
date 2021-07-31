const http = require('http');

const server = http.createServer(function(req,res){
    console.log(req.url)
    res.write("hello, world!")
    res.end();
})

server.listen(3000)