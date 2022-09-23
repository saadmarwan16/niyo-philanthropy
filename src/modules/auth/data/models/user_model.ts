// To parse this data:
//
//   import { Convert, UserModel } from "./file";
//
//   const userModel = Convert.toUserModel(json);

export interface UserModel {
  id: number;
  username: string;
  email: string;
  jwt: string;
  wallet_balance: number;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: Date;
  updatedAt: Date;
  full_name: string;
  role: Role;
  profile_image: ProfileImage | null;
}

export interface ProfileImage {
  id: number;
  url: string;
}

export interface Role {
  id: number;
  name: string;
  description: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}

// Converts JSON strings to/from your types
export class ConvertUserModel {
  public static toUserModel(json: string): UserModel {
    return JSON.parse(json);
  }

  public static userModelToJson(value: UserModel): string {
    return JSON.stringify(value);
  }
}
