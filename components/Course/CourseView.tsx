import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;

export const Sidebar = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
  width: 452px;
  height: 100%;
  box-shadow: 0 0 24px 2px ${painter.grayscale[4]};
  background-color: ${painter.basic.white};
  overflow: auto;
`;

export const Content = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: ${painter.grayscale[1]};
`;

export const ContentInner = styled.div`
  position: relative;
  min-width: 916px;
`;
