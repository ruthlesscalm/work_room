class AppError extends Error {
  public readonly statusCode: number;
  public readonly messageCode: string;
  constructor(message: string, statusCode: number, messageCode: string){
    super(message); 
    this.name = new.target.name;
    this.statusCode = statusCode;
    this.messageCode = messageCode;

    Error.captureStackTrace?.(this, new.target);
  }
}

export default AppError;

