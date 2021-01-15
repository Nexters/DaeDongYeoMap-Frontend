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
  export namespace GetSpaceXCEO {
    export interface Data {
      company: {
        ceo: string;
      };
    }
  }
  export namespace GetPlace {
    export interface Data {
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
  }
}
