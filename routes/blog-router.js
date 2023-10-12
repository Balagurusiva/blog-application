import express from 'express';
import { createBlog, getAllBlogs } from "../controller/blog-controller.js";

const routes = express.Router();

routes.get('/', getAllBlogs)
routes.post('/', createBlog)


export default routes