// const { model } = require("mongoose");
const userModel = require("../Model/UserModel");




const handleUserSignUp = (req, res)=>{
    try{
        userModel.create(req.body).then(()=>{
         res.json({"Message": "Creating Successfull"}).status(201)
        }).catch((err)=>{
            res.json({"Message": "Error", err:err}).status(500)
        })
    }
    catch(err){
        res.json({"Message": "Error",err:err}).status(500)
    }
}

module.exports = handleUserSignUp

