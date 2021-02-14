import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const AddSpotButton = styled.a.attrs({ href: '#' })`
  display: block;
  position: relative;
  width: 168px;
  height: 100%;
  padding-top: 80px;
`;

export const PlusIcon = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: ${painter.grayscale[5]};
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 24px;
    height: 4px;
    border-radius: 2px;
    margin: auto;
    background-color: ${painter.basic.white};
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 4px;
    height: 24px;
    margin: auto;
    border-radius: 2px;
    background-color: ${painter.basic.white};
  }
`;

export const DashedLine = styled.div<{
  vertical?: boolean;
}>`
  ${(props) =>
    props.vertical
      ? `
  position: absolute;
  top: 12px;
  left: 50%;
  width: 1px;
  height: 50%;
  border-right: 1px dashed ${painter.grayscale[6](props)};
  `
      : `
  position: absolute;
  top: 115px;
  left: 2px;
  width: 50%;
  height: 1px;
  border-bottom: 1px dashed ${painter.grayscale[6](props)};
  `}
`;

export const Comment = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: ${painter.grayscale[6]};
`;
