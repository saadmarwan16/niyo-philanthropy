// To parse this data:
//
//   import { Convert, ProfileModel } from "./file";
//
//   const profileModel = Convert.toProfileModel(json);

export interface ProfileModel {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: Date;
  updatedAt: Date;
  full_name: string;
  wallet_balance: number;
  donations: Donation[];
}

export interface Donation {
  id: number;
  amount: number;
  status: Status;
  createdAt: Date;
  campaign: Campaign;
}

export interface Campaign {
  id: number;
  title: string;
  slug: string;
  image: Image | null;
  category: Category | null;
}

export interface Category {
  id: number;
  title: string;
}

export interface Image {
  id: number;
  url: string;
}

export enum Status {
  Paid = "Paid",
  Unpaid = "Unpaid",
}

// Converts JSON strings to/from your types
export class ConvertProfileModel {
  public static toProfileModel(json: string): ProfileModel {
    return JSON.parse(json);
  }

  public static profileModelToJson(value: ProfileModel): string {
    return JSON.stringify(value);
  }
}
