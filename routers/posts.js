import express from 'express';
const routers = express.Router();
import blogPosts from "../content.js";
import postController from "../controllers/postController.js";
// const blogPosts = content.blogPosts;

//Index
routers.get("/", postController.index);

//Show
routers.get("/:id", postController.show);

//Store
routers.post('/', postController.store);

//Update
routers.put('/:id', postController.update);

//Modify
routers.patch('/:id', postController.modify);

//Destroy
routers.delete('/:id', postController.destroy);

export default routers;
