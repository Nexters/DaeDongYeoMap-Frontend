export type CourseView = {
  id: string;
  title: string;
  stickers: string[];
  courseImage: string;
  numStickers?: number;
  timestamp?: number;
  selectedDate: string;
};
