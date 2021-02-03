declare interface CustomQueryHook<Data, Variables = undefined> {
  (variables?: Variables): {
    loading: boolean;
    error?: ApolloError;
    data: Data;
  };
}

declare interface CustomLazyQueryHook<Data, Variables = undefined> {
  (variables?: Variables): [
    () => void,
    {
      loading: boolean;
      error?: ApolloError;
      data: Data;
    }
  ];
}

/**
 * TODO: Schema Type Generation 도입
 * 일단은 Type Alias랑 Type Utilities 만 잘 써도, 그렇게 귀찮지는 않음
 */
declare namespace GQL {
  export interface Place {
    id: string;
    place_name: string;
    category_name?: string;
    category_group_code?: string;
    category_group_name?: string;
    phone?: string;
    address_name?: string;
    road_address_name?: string;
    place_url?: string;
    distance?: string;
    x?: number;
    y?: number;
  }
  export interface Spot {
    _id: string;
    place_id: string;
    place_name: string;
    x: number;
    y: number;
    stickers: Array<GQL.Sticker>;
    category_name?: string;
    category_group_code?: string;
    category_group_name?: string;
    phone?: string;
    address_name?: string;
    road_address_name?: string;
    place_url?: string;
    distance?: string;
  }
  export interface Sticker {
    _id: string;
    sticker_category: string;
    is_used: boolean;
    spot: Spot;
  }
  export namespace GetPlace {
    export type Data = Place;
  }
  export namespace GetPlacesAndSpots {
    export type Data = {
      places: Place[];
      spots: Spot[];
    };
  }
  export namespace CreateSticker {
    export type Variables = {
      createStickerInput: {
        place_id: string;
        place_name: string;
        x: number;
        y: number;
        sticker_category: string;
        category_name?: string;
        category_group_code?: string;
        category_group_name?: string;
        phone?: string;
        address_name?: string;
        road_address_name?: string;
        place_url?: string;
        distance?: string;
      };
    };
    export type Data = Sticker;
  }
}
