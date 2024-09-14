import Fastify from "fastify";
import fs from "node:fs";

const PORT = 3000
const fastify = Fastify({logger:true})

var database = (callback) =>{
    fs.readFile ("./database.json", "utf8", (err,data)=> {
    if (err) throw err;
    const parseData = JSON.parse(data)
    callback(parseData)
})
}

database ((data) =>{
    console.log(data)
})

fastify.post('/livraria', async function handler(request, reply) {
    let requestMin = parseFloat(request.body["min"])
    let requestMax = parseFloat(request.body["max"])
    let requestName = request.body["name"]
    let filter = []
    let lista = database([])
    for (let i = 0; i < lista.length; i++) {
        if (parseFloat(lista[i].amount) >= requestMin && parseFloat(lista[i].amount) <= requestMax) {
            filter.push(lista[i])
        }
        if (lista[i].titulo == requestName){
            filter.push(lista[i])
        }
        continue
    }

    return { "items": filter }
})



try {
    await fastify.listen({ port: PORT })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}