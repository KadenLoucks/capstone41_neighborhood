import express from 'express';

<<<<<<< HEAD
import {getPosts,createPost} from '../controllers/posts.js';

const router = express.Router();

//localhost:5000/posts
router.get('/',getPosts);
router.post('/',createPost);
=======
import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
>>>>>>> c57b9c2d2542f9f4d9fb644b60bcdef07b0b2588

export default router;