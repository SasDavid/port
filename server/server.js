import http from "http";
import express from "express";
import cors from "cors";

const app = express();
const server = http.createServer(app);

app.use(cors())
    

app.use(express.static("client/dist"));

app.get("/", (req, res)=>{
    
})



server.listen(process.env.PORT ?? 3500, ()=>{
    console.log("Servidor inicializado en el puerto: " + PORT);
})