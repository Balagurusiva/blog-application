import User from '../models/User.js'
import bcrypt from 'bcryptjs'

export const getAllUser = async (req,res,next) =>{
         let user ;
         try{
            user = await User.find()
         }catch(err){
                console.log(err)
         }

         if(!user){
            res.status(404).json({"message":"no user found"})
         }

         return res.status(200).json({user})
}


export const signup = async (req,res , next ) =>{
    let {name, email, password} = req.body

    let existingUser;
    try{
        existingUser =await User.findOne({email})
    }catch(err){
        console.log(err)
    }

    if(existingUser){
        return res.status(401).json({
            "message":"user already present | login instated"
        })
    }

    const hashedPassword = bcrypt.hashSync(password)

    const user = new User({
        name,
        email,
        password:hashedPassword
    })

    try{
       user.save()
    }catch(err){
        console.log(err)
    }
    res.status(200).json({
        "message":"user account created"
    })
}

export const login = async (req, res, next) =>{
      let { email, password} = req.body

    let existingUser;
    try{
        existingUser =await User.findOne({email})
    }catch(err){
        console.log(err)
    }

    if(!existingUser){
        return res.status(401).json({
            "message":"no user found | singup"
        })
    }
     
     const isCorrectPassword = bcrypt.compareSync(password, existingUser.password)

     if(!isCorrectPassword){
        return res.status(400).json({
            "message":"invalid data"
        })
     }

     res.status(200).json({
        "message":"logged in successfully"
     })
}