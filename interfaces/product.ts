import { idType } from ".";
import { IProductCategory } from "./category";

interface IProductAttributes {
  color: string
  brand?: string
  size?: string | number
  material?: string
  model?: string
  weight?: number | string
  width?: number
  deepth?: number
  height?: number
}

export interface IProduct {
  id?: idType
  category: IProductCategory
  attributes: IProductAttributes
  images_links: string[]
  title: string
  description: string
  price: number
  quantity: number
}





