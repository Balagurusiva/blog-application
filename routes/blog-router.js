import express from 'express';
import { createBlog, getAllBlogs } from "../controller/blog-controller.js";

const routes = express.Router();

routes.post('/create', createBlog)
routes.get('/', getAllBlogs) 


export default routes