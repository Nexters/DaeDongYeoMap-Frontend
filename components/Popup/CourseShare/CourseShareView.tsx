import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const CourseShare = styled.div<{ zIndex: string }>`
  position: fixed;
  z-index: ${(props) => props.zIndex || '10000'};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(34, 34, 34, 0.6);
`;

export const Layer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 496px;
  height: 780px;
  padding-top: 44px;
  margin: -412px 0 0 -248px;
`;

export const CloseLayerButton = styled.a.attrs({ href: '#' })`
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 2px;
    height: 18px;
    border-radius: 1px;
    margin: auto;
    background-color: ${painter.basic.white};
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;
