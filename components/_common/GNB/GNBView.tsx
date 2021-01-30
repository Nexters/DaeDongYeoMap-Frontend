import React from 'react';
import styled from 'styled-components';

export const GNB = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  width: 96px;
  height: 100vh;
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

export const IconImg = ({
  Icon,
  isSelected,
}: {
  Icon: React.FunctionComponent;
  isSelected: boolean;
}): React.FunctionComponent => styled(Icon)`
  display: inline-block;
  width: 40px;
  height: 40px;
  vertical-align: top;
  color: ${(props) =>
    isSelected ? props.theme.primary.basic : props.theme.grayscale[5]};
`;

export const IconText = styled.div<{ isSelected: boolean }>`
  margin-top: 4px;
  color: ${(props) =>
    !props.isSelected ? props.theme.grayscale[5] : props.theme.primary.basic};
  font-size: 14px;
  font-weight: normal;
`;
