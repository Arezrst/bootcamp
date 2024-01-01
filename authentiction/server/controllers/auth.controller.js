const AuthModel = require('../models/auth.model')
const Response = require("../utils/response");


exports.register=async (req,res)=>{
  try{
    let result=await AuthModel.register(req.body)
    res.json(new Response(result, true, ""));
  }catch(error){
    res.json(new Response([], false, error.message),400);
  }
}
exports.login=async (req,res)=>{
  try{
    let result=await AuthModel.login(req.body)
    res.json(new Response(result, true, ""))
  }catch(error){
    res.json(new Response([], false, error))
  }

}
