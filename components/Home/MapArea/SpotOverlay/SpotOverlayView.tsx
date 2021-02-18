import { CLASS_OVERLAY, ATTR_OVERLAY_ID } from '~/constants/kakaoMap';

export const templateSpotOverlay = ({
  spotId,
  placeName,
}: {
  spotId: string;
  placeName: string;
}): string => {
  return `<div class="${CLASS_OVERLAY}" ${ATTR_OVERLAY_ID}="${spotId}"><a ><span class="title">${placeName}</span></a></div>`;
};
