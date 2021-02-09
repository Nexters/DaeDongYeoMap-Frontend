import { useSpotsState } from '~/lib/apollo/vars/home';

const home = {
  typePolicies: {
    Query: {
      fields: {
        spotsState: {
          read() {
            return useSpotsState();
          },
        },
      },
    },
  },
};

export default home;
