const http = require('http');
const fs = require('fs');
const PORT = 8000;

const server = http.createServer((req,res)=>{
    const filePath = req.url ==='/'?'index.html':`${req.url.replace('/','')}.html`

    fs.readFile(filePath,(err,content)=>{
        if(err){
            fs.readFile('404.html',(err,errContent)=>{
                if(err){
                    res.end('<h3>404</h3>')
                }else{
                    res.writeHead(404,{'Content-Type':'text/html'})
                    res.end(errContent)
                }
            }) 
        }else{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(content)
        }
    })
})


server.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`)
})