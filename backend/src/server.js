const express=require('express')
const mongoose=require('mongoose')

require('dotenv').config()

const routes=require('./routes')

const app=express()

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0-onnlg.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const port=3333

app.use(express.json())
app.use(routes)

app.listen(port,()=>{
    console.log(`Servidor online na porta ${port}`)
})