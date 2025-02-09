const express=require('express');
const path=require('path')
const app=express();
const cors=require('cors')
app.use(cors());
app.use(express.json())
const dotenv=require('dotenv')
dotenv.config({path:path.join(__dirname,'config','config.env')})
const router=require('./Router')
const database=require('./Database')
database()
app.use(router)

app.listen(process.env.PORT,()=>{
    console.log("server started successfully");
})