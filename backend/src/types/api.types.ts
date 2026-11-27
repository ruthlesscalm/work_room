export type ApiResponse<T = undefined> = 
  | {success: true, data: T, message: string}
  | {success: false, error: string, code?: string}
