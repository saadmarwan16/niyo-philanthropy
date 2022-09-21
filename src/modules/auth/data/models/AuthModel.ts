// To parse this data:
//
//   import { Convert, AuthModel } from "./file";
//
//   const authModel = Convert.toAuthModel(json);

export interface AuthModel {
  jwt: string;
  user: User;
}

export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Converts JSON strings to/from your types
export class ConvertAuthModel {
  public static toAuthModel(json: string): AuthModel {
    return JSON.parse(json);
  }

  public static authModelToJson(value: AuthModel): string {
    return JSON.stringify(value);
  }
}
