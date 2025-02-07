const mongoose=require('mongoose')
const database=()=>{
mongoose.connect(process.env.MANGODB_URL).then(()=>{
    console.log("mongodb connected successfully")
}).catch((err)=>{
    console.error("cant be connected to db server")
})
}
module.exports=database
