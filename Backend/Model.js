/**'title':title,
      'description':description,
      'authorname':authorname,
      'blog':blog,
      'image':image,
      'reference':reference,
      'id':Date.now() */
      const mongoose=require('mongoose');
      const schema=new mongoose.Schema({
        
        title:{
            type:String
        },
        description:{
            type:String
        },
        authorname:{
            type:String
        },
        blog:{
            type:String
        },
        image:{
            type:String
        },
        reference:{
            type:String
        }
      })
      const model=mongoose.model("mydata",schema)
      module.exports={model}