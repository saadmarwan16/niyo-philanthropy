// To parse this data:
//
//   import { Convert, BlogsModel } from "./file";
//
//   const blogsModel = Convert.toBlogsModel(json);

export interface BlogsModel {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  id: number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  title: string;
  introduction: string;
  body: string;
  conclusion: string;
  time_to_read: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  image: Image;
  category: Category;
}

export interface Category {
  data: CategoryData | null;
}

export interface CategoryData {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Image {
  data: ImageData | null;
}

export interface ImageData {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  url: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

// Converts JSON strings to/from your types
export class ConvertBlogsModel {
  public static toBlogsModel(json: string): BlogsModel {
    return JSON.parse(json);
  }

  public static blogsModelToJson(value: BlogsModel): string {
    return JSON.stringify(value);
  }
}
