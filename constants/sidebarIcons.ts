export interface SidebarIcons {
  id: number;
  label: string;
  textColor: string;
  iconUrl: string;
  selected: boolean;
}

const sidebarIcons: SidebarIcons[] = [
  {
    id: 0,
    label: 'Home',
    textColor: '#D1D5DC',
    iconUrl: '/home_default.png',
    selected: false,
  },
  {
    id: 1,
    label: 'Home',
    textColor: '#01E3AB',
    iconUrl: '/home_selected.png',
    selected: true,
  },
  {
    id: 2,
    label: 'My',
    textColor: '#D1D5DC',
    iconUrl: '/profile_default.png',
    selected: false,
  },
  {
    id: 3,
    label: 'My',
    textColor: '#01E3AB',
    iconUrl: '/profile_selected.png',
    selected: true,
  },
  {
    id: 4,
    label: 'Setting',
    textColor: '#D1D5DC',
    iconUrl: '/setting_default.png',
    selected: false,
  },
  {
    id: 5,
    label: 'Setting',
    textColor: '#01E3AB',
    iconUrl: '/setting_selected.png',
    selected: true,
  },
];

export default sidebarIcons;
