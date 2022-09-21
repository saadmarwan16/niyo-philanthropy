// To parse this data:
//
//   import { Convert, BlogModel } from "./file";
//
//   const blogModel = Convert.toBlogModel(json);

export interface BlogModel {
  data: BlogModelData;
  meta: Meta;
}

export interface BlogModelData {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  title: string;
  introduction: string;
  body: string;
  conclusion: string;
  time_to_read: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  slug: string;
  image: Image;
  category: Category;
  footer: Footer;
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
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Footer {
  data: FooterData | null;
}

export interface FooterData {
  id: number;
  attributes: TentacledAttributes;
}

export interface TentacledAttributes {
  description: string;
  email: string;
  phone: string;
  address: string;
}

export interface Image {
  data: ImageData | null;
}

export interface ImageData {
  id: number;
  attributes: StickyAttributes;
}

export interface StickyAttributes {
  url: string;
}

export interface Meta {}

// Converts JSON strings to/from your types
export class ConvertBlogModel {
  public static toBlogModel(json: string): BlogModel {
    return JSON.parse(json);
  }

  public static blogModelToJson(value: BlogModel): string {
    return JSON.stringify(value);
  }
}
