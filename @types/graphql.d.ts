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
    sticker_index: number;
    sweet_percent: number;
    is_used: boolean;
    spot: Spot;
  }
  export interface Course {
    _id: string;
    stickers: Sticker[];
    title: string;
    is_share: boolean;
    courseImage: string;
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
        sticker_index: number;
        sweet_percent: number;
        category_name?: string;
        category_group_code?: string;
        category_group_name?: string;
        phone?: string;
        address_name?: string;
        road_address_name?: string;
        place_url?: string;
        distance?: string;
        is_used?: boolean;
      };
    };
    export type Data = {
      createSticker: Sticker;
    };
  }
  export namespace CreateCourse {
    export type Variables = {
      createCourseInput: {
        stickers: string[];
        title: string;
        is_share: boolean;
      };
    };
    export type Data = {
      createCourse: Course;
    };
  }
  export namespace GetCourse {
    export type Variables = {
      courseInput: {
        courseId: string;
        courseImageInput: {
          theme: string;
          width: number;
          height: number;
        };
      };
    };
    export type Data = {
      course: Course;
    };
  }
  export namespace GetMapSpots {
    export type Variables = {
      searchSpotDto?: {
        x: number;
        y: number;
      };
    };
    export type Data = {
      spots: Array<Spot>;
    };
  }
}
