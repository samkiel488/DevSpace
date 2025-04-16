import express from "express";


const app = express();
const PORT = 8080;

app.get("/api", (req , res)=>{
    res.json({message: "Hello from the server!"});
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port localhost:${PORT}`);
})