const http = require("http") 


http.createServer((req , res)=>{
    if(req.url === "/"){
        res.write("welcome to page")
        res.end()
    }
    if(req.url === "/anonymous"){
        res.write("anonymous")
        res.end()
    }
}).listen(3000)

