// To parse this data:
//
//   import { Convert, GalleryModel } from "./file";
//
//   const galleryModel = Convert.toGalleryModel(json);

export interface GalleryModel {
  data: GalleryModelData;
  meta: Meta;
}

export interface GalleryModelData {
  id: number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  footer: Footer;
  images: ImageElement[];
}

export interface Footer {
  data: FooterData;
}

export interface FooterData {
  id: number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  description: string;
  email: string;
  phone: string;
  address: string;
}

export interface ImageElement {
  id: number;
  title: string;
  image: ImageImage;
}

export interface ImageImage {
  data: ImageData;
}

export interface ImageData {
  id: number;
  attributes: TentacledAttributes;
}

export interface TentacledAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Formats {
  thumbnail: Large;
  large: Large;
  medium: Large;
  small: Large;
}

export interface Large {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Meta {}

// Converts JSON strings to/from your types
export class ConvertGalleryModel {
  public static toGalleryModel(json: string): GalleryModel {
    return JSON.parse(json);
  }

  public static galleryModelToJson(value: GalleryModel): string {
    return JSON.stringify(value);
  }
}
