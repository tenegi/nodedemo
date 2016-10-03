const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
    console.log('hello from server');
    res.render('/public/index.html');
});

app.listen(port);

console.log('server listening on port 3000');