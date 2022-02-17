import  express  from "express";
import  {getPost,createPost,updatePost,deletePost,likePost } from "../controllers/post.js";

const router = express.Router();
// http://localhost:5000/post
router.get('/',getPost)

// http://localhost:5000/post/create
router.post('/create',createPost)
router.put('/:id',updatePost)
router.delete('/:id',deletePost)
router.put('/:id/likePost',likePost)

export default router
