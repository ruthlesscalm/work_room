import type { ErrorRequestHandler } from "express";
import AppError from "../errors/AppError.js";
import type { ApiResponse } from "../types/api.types.js";

const errorMiddleware: ErrorRequestHandler<unknown, ApiResponse> = async (err, req, res, next) => {
  if(err instanceof AppError){
    return res.status(err.statusCode).json({
      success: false,
      error: err.message,
      code: err.messageCode
    })
  }

  return res.status(500).json({
    success: false,
    error: "Internal Server Error",
    code: "INTERNAL_SERVER_ERROR",
  })
}

export default errorMiddleware;
