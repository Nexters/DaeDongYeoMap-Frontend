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

declare namespace GQL {
  export interface Place {
    id: string;
    place_name: string;
    category_name: string;
    category_group_code: string;
    category_group_name: string;
    phone: string;
    address_name: string;
    road_address_name: string;
    place_url: string;
    distance: string;
    x: number;
    y: number;
  }
  export interface Spot {
    id: string;
    place_name: string;
    category_name: string;
    category_group_code: string;
    category_group_name: string;
    phone: string;
    address_name: string;
    road_address_name: string;
    place_url: string;
    distance: string;
    x: number;
    y: number;
  }
  export namespace GetSpaceXCEO {
    export interface Data {
      company: {
        ceo: string;
      };
    }
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
  export namespace CreateSpot {
    export type Variables = Place;
    export type Data = Spot;
  }
}
