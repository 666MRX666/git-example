const os = require("os")
const Platform = os.platform()
const arch = os.arch()
const cpu  = os.cpus()[0].model
const version = os.version()
const Banner = `


platform : ${Platform}
arch : ${arch}
cpu : ${cpu}
version :${version}


`


console.log(Banner)
