import axios from 'axios';
<<<<<<< HEAD
const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
=======

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
>>>>>>> c57b9c2d2542f9f4d9fb644b60bcdef07b0b2588
