export const templateSpotOverlay = ({
  placeName,
}: {
  placeName: string;
}): string => {
  return `<div class="custom-overlay"><a href="#" target="_blank"><span class="title">${placeName}</span></a></div>`;
};
