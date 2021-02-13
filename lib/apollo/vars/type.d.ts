export interface Spot {
  _id: string;
  place_id: string;
  stickers(populate: boolean): Sticker;
  place_name: string;
  category_name: string;
  category_group_code: string;
  category_group_name: string;
  phone: string;
  address_name: string;
  road_address_name: string;
  place_url: string;
  distance: string;
  x: Float;
  y: Float;
}

export interface Sticker {
  _id: string;
  sticker_category: string;
  is_used: boolean;
  spot(populate: boolean): Spot;
}
