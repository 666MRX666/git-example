const fs  = require("fs")

const data = "learn fs nodejs"

fs.writeFile("file.txt" , data , (err)=>{
    if(err){
        console.log(err)
    }
    console.log("Created File")
    return data
})

fs.readFile("file.txt" , (err , data)=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})

fs.mkdir("file" , (err)=>{
    if(err){
        console.log(err)
    }
})

fs.rmdir("file" , (err)=>{
    if(err){
        console.log(err)
    }
})