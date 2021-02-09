import React from 'react';
import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const GNB = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 72px;
  height: 100vh;
  border-right: 1px solid ${painter.grayscale[3]};
  box-shadow: 0 0 8px 1px ${painter.grayscale[4]};
  background-color: ${painter.basic.white};
`;

export const GNBInner = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  padding: 184px 0 50px;
`;

export const GNBLink = styled.a`
  display: block;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  :hover {
    cursor: pointer;
  }
  & + & {
    margin-top: 56px;
  }
`;

export const IconImg = (
  Icon: React.FunctionComponent
): React.FC<{ isSelected: boolean }> => styled(Icon)<{
  isSelected: boolean;
}>`
  display: inline-block;
  width: 32px;
  height: 32px;
  vertical-align: top;
  color: ${(props) =>
    props.isSelected ? props.theme.primary.basic : props.theme.grayscale[5]};
`;

export const IconText = styled.div<{ isSelected: boolean }>`
  margin-top: 4px;
  color: ${(props) =>
    !props.isSelected ? props.theme.grayscale[5] : props.theme.primary.basic};
  font-size: 12px;
  font-weight: normal;
`;
