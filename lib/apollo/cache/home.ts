import { spotsState } from '~/lib/apollo/vars/home';

const home = {
  typePolicies: {
    Query: {
      fields: {
        spotsState: {
          read() {
            return spotsState();
          },
        },
      },
    },
  },
};

export default home;
