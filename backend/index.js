const express = require('express');
const app = express();
require('dotenv/config');
//middleware
app.use(express.json())

const api = process.env.API_URL;

app.get(`${api}/products`,(req,res)=>{
const sample_product = {
id : 1,
name : 'kara shev',
image : 'image url'
}
res.send(sample_product);
})

app.post(`${api}/products`,(req,res)=>{
    const new_product = req.body
    res.send(new_product);
    })

app.listen(3000, ()=>{
    console.log("server is running",api)
})
