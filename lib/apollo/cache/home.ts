import {
  useCurrentPosition,
  useIsCustomSpotSetting,
  useSpotsState,
} from '~/lib/apollo/vars/home';

const home = {
  typePolicies: {
    Query: {
      fields: {
        spotsState: {
          read() {
            return useSpotsState();
          },
        },
        currentPosition: {
          read() {
            return useCurrentPosition();
          },
        },
        isCustomSpotSetting: {
          read() {
            return useIsCustomSpotSetting();
          },
        },
      },
    },
  },
};

export default home;
