const model=require('./Model')
exports.createuser=async(req,res)=>{
try{
    const {title,description,authorname,blog,image,reference,id}=req.body;
    console.log(req.body)
    const user=await model.create({title,description,authorname,blog,image,reference,id})
    if(user){
       return res.status(200).json(user)
    }
    return res.status(400).json("data get but cant send to the database")

}
catch(err){
    res.status(404).json("not even data getting")

}
}


exports.getalluser=async(req,res)=>{
    try{
        const user=await model.find();
        if(user){
           return res.status(200).json(user)
        }
        return res.status(400).json("data get but cant send to the database")
    
    }
    catch(err){
        res.status(404).json("not even data getting")
    
    }
    }
exports.getsingleuser=async(req,res)=>{
        try{
            const id=req.params.id
            const user=await model.findById(id);
            if(user){
               return res.status(200).json(user)
            }
            return res.status(400).json("data get but cant send to the database")
        
        }
        catch(err){
            res.status(404).json("not even data getting")
        
        }
        }
exports.updateuser=async(req,res)=>{
            try{
                const user=await model.findByIdAndUpdate(req.params.id);
                if(user){
                   return res.status(200).json(user)
                }
                return res.status(400).json("data get but cant send to the database")
            
            }
            catch(err){
                res.status(404).json("not even data getting")
            
            }
            }       
exports.deleteuser=async(req,res)=>{
                try{
                    const user=await model.findByIdAndDelete(req.params.id);
                    if(user){
                       return res.status(200).json(user)
                    }
                    return res.status(400).json("data get but cant send to the database")
                
                }
                catch(err){
                    res.status(404).json("not even data getting")
                
                }
                }       