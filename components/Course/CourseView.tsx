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
  width: 452px;
  height: 100%;
  padding-top: 80px;
  background-color: ${painter.basic.white};
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
  height: 100%;
`;
