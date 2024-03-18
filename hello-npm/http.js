import { createServer } from 'http';

createServer(function(req,res){

        res.write('Hello World Descomplica!');
        res.end();
    }).listen(8080);
