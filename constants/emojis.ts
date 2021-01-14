// TODO: 추후 BE에서 관리예정

export interface Emoji {
  id: number;
  imageUrl: string;
}

const emojis: Emoji[] = [
  { id: 0, imageUrl: '/emoji_crown.png' },
  { id: 1, imageUrl: '/emoji_surprise.png' },
  { id: 2, imageUrl: '/emoji_color.png' },
  { id: 3, imageUrl: '/emoji_star.png' },
  { id: 4, imageUrl: '/emoji_discount.png' },
  { id: 5, imageUrl: '/emoji_sheild.png' },
  { id: 6, imageUrl: '/emoji_bolt.png' },
];

export default emojis;
