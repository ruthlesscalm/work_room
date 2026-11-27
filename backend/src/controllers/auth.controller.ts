import type { RequestHandler} from "express";
import type { ApiResponse } from "../types/api.types.js";

const registerUser: RequestHandler<unknown, ApiResponse> = async (req, res) => {
  const {email, password} = req.body;
  if(!email || !password){
    return res.status()
  }
  return res.status(200).json({
    success: true,
    data: data,
    message: "Registerd User Successfully"
  })
}

export {
  registerUser
}
