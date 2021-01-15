// TODO: 추후 BE에서 관리예정

export interface Mood {
  color: string;
  label: string;
}

const moods: Mood[] = [
  { color: '#ff7474', label: '로맨틱한' },
  { color: '#7a65ff', label: '신나는' },
  { color: '#35d6b9', label: '시크한' },
  { color: '#3a87fc', label: '자유로운' },
];

export default moods;
