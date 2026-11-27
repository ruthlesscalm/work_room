import type { RequestHandler} from "express";
import type { ApiResponse } from "../types/api.types.js";
import AppError from "../errors/AppError.js";
import bcrypt from "bcrypt";

const registerUser: RequestHandler<unknown, ApiResponse> = async (req, res) => {
  const email = req.body?.email;
  const password = req.body?.password;
  if(!email || !password){
      throw new AppError("Email or Password cannot be empty", 400, "EMAIL_OR_PASSWORD_EMPTY");
  }
  
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    throw new AppError("Invalid email format", 400, "INVALID_EMAIL_FORMAT");
  }

  if(password.length < 6 || password.length > 72){
    throw new AppError("Password must be between 6 and 72 characters", 400, "INVALID_PASSWORD_LENGTH");
  }

  const hashedPassword = await bcrypt.hash(password, 10); 

  return res.status(200).json({
    success: true,
    data: undefined,
    message: "Registerd User Successfully"
  })
}

export {
  registerUser
}
