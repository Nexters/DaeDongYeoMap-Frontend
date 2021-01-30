import React from 'react';
import styled from 'styled-components';

export const GNB = styled.div`
  float: left;
  width: 96px;
  height: 100vh;
`;

export const GNBInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.04);
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
  width: 40px;
  height: 40px;
  vertical-align: top;
  color: ${(props) =>
    props.isSelected ? props.theme.primary.basic : props.theme.grayscale[5]};
`;

export const IconText = styled.div<{ isSelected: boolean }>`
  margin-top: 4px;
  color: ${(props) =>
    !props.isSelected ? props.theme.grayscale[5] : props.theme.primary.basic};
  font-size: 14px;
  font-weight: normal;
`;
