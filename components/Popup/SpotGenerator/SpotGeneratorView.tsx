import React from 'react';
import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const SpotGenerator = styled.div<{ zIndex: string }>`
  position: fixed;
  z-index: ${(props) => props.zIndex || '10000'};
  top: 0;
  right: 0;
  bottom: 0;
  width: 500px;
  border-top-left-radius: 40px;
  box-shadow: 0 0 14px 1px ${painter.grayscale['6']};
  background-color: #f6f8f9;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 112px);
  padding: 40px 32px 48px;
`;

export const AreaText = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
`;

export const HelpTitle = styled.strong`
  display: block;
  font-size: 24px;
  line-height: 25px;
  color: ${painter.grayscale['9']};
`;

export const HelpText = styled.p`
  margin-top: 4px;
  font-size: 18px;
  line-height: 25px;
  color: ${painter.grayscale['6']};
`;
