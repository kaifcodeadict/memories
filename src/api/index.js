import axios from 'axios';

const url = 'https://memoriesmernprojects.herokuapp.com/post'
const posturl = 'https://memoriesmernprojects.herokuapp.com/post/create'

export const fetchPosts = ()=> axios.get(url);
export const createPosts = (newPost)=> axios.post(posturl,newPost);
export const updatePosts = (id,update)=> axios.put(`${url}/${id}`,update);
export const deletePosts = (id)=> axios.delete(`${url}/${id}`);
export const likePosts = (id)=> axios.put(`${url}/${id}/likePost`);
