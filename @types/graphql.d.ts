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
}
