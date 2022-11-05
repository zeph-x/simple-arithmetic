
export class BaseHandler {
  public stringify(obj: any): string {
    return JSON.stringify(obj);
  }
}

export interface IUser {
  slackUsername: string;
  backend: boolean;
  age: number;
  bio: string;
}


export interface IArithmeticPayload {
  operation_type: {
    type: string, 
    enum: ['addition', 'subtraction', 'multiplication']
    },
  x: number, 
  y: number 
}  
  
  export interface IArithmeticResponse {
  slackUsername: string, 
  result: number, 
  operation_type: string 
}

