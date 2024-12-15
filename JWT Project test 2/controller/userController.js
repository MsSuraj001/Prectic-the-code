const { userModels } = require("../models/userModel")

const handlUser = (req, res)=>{
        userModels.create(req.body).then(()=>{
            res.json({"Message" : "Created Successfull"}).states(500)
        })
}

module.exports = {handlUser}