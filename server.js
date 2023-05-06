const express = require('express');
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello World!");
});
const products=[
    { 
        id:1,
        name:"iphone",

},
{
    id:2,
    name:"Samsung",
},
{
    id:3,
    name:"Redme",
}


]

app.get('/products',(req,res)=>{
    res.json(products);
});
app.get('/products/:id',(req,res) =>{
const newdata= products.filter(item=>item.id.toString() === req.params.id);
return res.json(newdata);
});
app.post('/addproducts', (req,res) =>{
    const{id,name} = req.body;
    console.log(id,name);
    return res.send("Data stored!!");
    
});
app.delete('/deleteproducts/:id', (req,res) =>{
    const newdata= products.filter(item=>item.id.toString() === req.params.id);
    console.log(newdata);
    //return res.json(newdata);
    return res.send("deleted");
});


app.listen(3000,() => console.log("The server is running..."));




