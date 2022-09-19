const Event = require("events")

let logger = new Event()

logger.on("message", (event)=>{
    console.log(event.massage)
})

logger.emit("message" , {massage : "learn event nodejs"})