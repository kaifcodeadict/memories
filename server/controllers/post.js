import  mongoose  from 'mongoose';
import PostMessage from '../models/postMessage.js'




export const getPost = async (req,res)=>{

    try {
        const postMessages = await PostMessage.find()
        console.log(postMessages);        

        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
        
    }
}

export const createPost = async (req,res)=>{
    const body = req.body;


    try {
        const creatmessage = await PostMessage.create(body)
        console.log(creatmessage);
        res.status(200).json(creatmessage)
        console.log("success");
    } catch (error) {
        res.status(404).json({message: error.message})
        
    }    
}

export const updatePost = async (req,res)=>{
    // getting the id rom params in changing its name by _id
    const {id:_id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
         return res.status(404).send('no post with that is')
        }

    try {
        const updatedPost = await PostMessage.findByIdAndUpdate(_id,{...post,_id},{
            new:true
        })
        
        res.status(200).json(updatedPost)
        console.log("success");
    } catch (error) {
        res.status(404).json({message: error.message})
        
    }    
}

export const deletePost = async  (req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('no post with that is')
       }
       await PostMessage.findByIdAndRemove(id)
       res.json({message:'Post deleted successfull'})
}
export const likePost = async (req,res)=>{
    // getting the id rom params in changing its name by _id
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
         return res.status(404).send('no post with that is')
        }

    try {
        const post = await PostMessage.findById(id)
        const updateLike = await PostMessage.findByIdAndUpdate(id,{likeCount:post.likeCount + 1},{new:true})  
        res.json(updateLike)  
        console.log("success");
    } catch (error) {
        res.status(404).json({message: error.message})
        
    }    
}