const model = require("../model/model")
const userModel = require("../model/userModel")
const userDisplay = async (req, res) => {
    const {id} = req.body
    try {
        const user = await model.findById(id);
        
        res.status(200).send(user);
    } catch (error) {
        console.log(error)
    }
}
const dataSave = async (req, res) => {
    const {adminid, name, email, mobile, flightclass, country} = req.body
    const user =  await userModel.create(
        {
        name:name,
        email:email,
        mobile:mobile,
        flightclass:flightclass,
        country:country,
        adminid:adminid
        }
    ) 
    res.status(200).send({msg:"Your Flighrt Booked!"});
}

module.exports = {
    userDisplay,
    dataSave
}