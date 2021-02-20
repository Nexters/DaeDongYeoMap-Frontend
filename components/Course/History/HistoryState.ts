export type CourseView = {
  id: string;
  title: string;
  stickers: Sticker[];
  courseImage: string;
  numStickers?: number;
  timestamp?: number;
};

export type Sticker = {
  sweet_percent: number;
  sticker_index: number;
};
