//reuire built-in modules   Common js

const http = require('http');
const fs = require('fs');
const mime = require('mime-types');

let lookup = mime.lookup; //alias for mime.lookup
const port=3000;

//when we create a server instance, it is IMMUTABLE = cannot be changed until the server is restarted
const server = http.createServer(function(req,res)
{
    let path = req.url; //alias for req.rul

    if(path =="/" || path=="/home"){
        path= "/index.html";
    }

    let mime_type = lookup(path.substring(1));
    // console.log(`mime type is ${mime_type}`);
    
    fs.readFile(__dirname+path,function(err,data)
    {
        if(err){
            res.writeHead(404); //status  file not found
            return res.end("ERROR:404 - File Not Found"); //output the error to the page
            
        }
        //no error
        res.setHeader("X-Content-Type-Options", "nosniff") //security guard
        res.writeHead(200, {'Content-Type':mime_type}); //status all OKAY
        return res.end(data); //output the file that was read to the page
        
    });
});

server.listen(port, function()
{
    console.log(`Server is running at port ${port}`);
});