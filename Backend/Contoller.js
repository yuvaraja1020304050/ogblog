const {model}=require('./Model')
const mongoose=require('mongoose')
exports.createuser=async(req,res)=>{
try{
    const {title,description,authorname,blog,image,reference}=req.body;
    console.log(req.body)
    const user=await model.create({title,description,authorname,blog,image,reference})
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
    try {
        const { id } = req.params;
console.log(id);
        // Validate MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        const user = await model.findById(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json(user);
    } catch (err) {
        console.error("Error fetching user:", err);
        res.status(500).json({ error: "Server error" });
    }
        }
exports.updateuser=async(req,res)=>{
            try{
                const user=await model.findByIdAndUpdate(req.params.id,req.body,{ new: true } );
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