const express=require('express');
const app=express();
const cors=require('cors');
const port=5000;

app.use(cors());
const chefs=require("./data/chef.json")


app.get('/',(req,res)=>{
    res.send("Server is running")
})

app.get('/chefs',(req,res)=>{
    res.send(chefs);
})

app.get('/chefs/:id',(req,res)=>{
    const id=req.params.id;
    const chef=chefs.find(n=>n.id==id);
    res.send(chef)
})


app.listen(port);
