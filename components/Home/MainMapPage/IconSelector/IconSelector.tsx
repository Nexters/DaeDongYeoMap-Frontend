import React from 'react';
import { SidebarIcons } from '~/constants/sidebarIcons';
import { IconImg, IconText, Wrapper } from './IconSelectorView';

interface IProps {
  icon: SidebarIcons;
  onClick: () => void;
}

const IconSelector = ({ icon, onClick }: IProps) => {
  return (
    <Wrapper onClick={onClick}>
      <IconImg src={icon.iconUrl} />
      <IconText selected={icon.selected}>{icon.label}</IconText>
    </Wrapper>
  );
};

export default IconSelector;
