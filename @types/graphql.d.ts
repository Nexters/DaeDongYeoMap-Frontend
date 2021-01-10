declare interface CustomQueryHook<Data, Variables = undefined> {
  (variables?: Variables): {
    loading: boolean;
    error?: ApolloError;
    data: Data;
  };
}

declare namespace GQL {
  export namespace GetSpaceXCeoName {
    export interface Data {
      company: {
        ceo: string;
      };
    }
  }
}
