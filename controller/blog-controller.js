import express from 'express'
import Blog from '../models/Blog.js'

export const getAllBlogs = async (req,res,next ) =>{

    let blogs;
    try{
        blogs = await Blog.find();
    }catch(err){
        console.log(err)
    }

    if(!blogs){
        res.status(404).json({
            "message" : "no blogs are found"
        })  
    }

    return res.status(200).json({blogs})
}

export const createBlog = async(req,res,next) =>{
    const [title, description, image,user] = req.body
}