// To parse this data:
//
//   import { Convert, HomeModel } from "./file";
//
//   const homeModel = Convert.toHomeModel(json);

export interface HomeModel {
  data: HomeModelData;
  meta: Meta;
}

export interface HomeModelData {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  createdAt: Date;
  updatedAt: Date;
  campaigns: Campaigns;
  footer: Footer;
  about_us: AboutUs;
  achievements: Achievements;
  categories: Categories;
  mission_and_vision: MissionAndVision;
  making_difference: MakingDifference;
  hero_details: HeroDetails;
}

export interface AboutUs {
  id: number;
  who_we_are: string;
  what_we_do: string;
}

export interface Achievements {
  id: number;
  monthly_donation_amount: number;
  donations_received: number;
  active_campaigns: number;
}

export interface Campaigns {
  data: Datum[];
}

export interface Datum {
  id: number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  title: string;
  target: number;
  amount_raised: number;
  createdAt: Date;
  updatedAt: Date;
  introduction: string | null;
  body: string;
  conclusion: string | null;
  time_to_read: number;
  slug: string;
  image: Image1;
  category: Category;
}

export interface Category {
  data: CategoryData | null;
}

export interface CategoryData {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  title: string;
}

export interface Image1 {
  data: Image1Data | null;
}

export interface Image1Data {
  id: number;
  attributes: TentacledAttributes;
}

export interface TentacledAttributes {
  url: string;
}

export interface Categories {
  id: number;
  title: string;
  description: string;
  human: string;
  medicine: string;
  study: string;
  food: string;
}

export interface Footer {
  data: FooterData;
}

export interface FooterData {
  id: number;
  attributes: StickyAttributes;
}

export interface StickyAttributes {
  description: string;
  email: string;
  phone: string;
  address: string;
}

export interface HeroDetails {
  id: number;
  detail1: Detail;
  detail2: Detail;
  detail3: Detail;
}

export interface Detail {
  id: number;
  title: string;
  description: string;
  hero_image: Image1;
}

export interface MakingDifference {
  id: number;
  children: string;
  medicine: string;
  donation: string;
  description: Description;
  image1: Image1;
  image2: Image1;
  image3: Image1;
}

export interface Description {
  id: number;
  content: string;
}

export interface MissionAndVision {
  id: number;
  our_mission: string;
  our_vision: string;
}

export interface Meta {}

// Converts JSON strings to/from your types
export class ConvertHomeModel {
  public static toHomeModel(json: string): HomeModel {
    return JSON.parse(json);
  }

  public static homeModelToJson(value: HomeModel): string {
    return JSON.stringify(value);
  }
}
