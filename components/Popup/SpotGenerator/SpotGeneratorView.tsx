import React from 'react';
import styled from 'styled-components';

export const SpotGenerator = styled.div<{ zIndex: string }>`
  position: fixed;
  z-index: ${(props) => props.zIndex || '10000'};
  top: 0;
  right: 0;
  bottom: 0;
  width: 31.25rem;
  border-top-left-radius: 2.5rem;
  box-shadow: 0 0 0.75rem 0.13rem #ddd;
  background-color: #f6f8f9;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 7rem);
  padding: 2.5rem 2rem 3rem;
`;

export const AreaText = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
`;

export const HelpTitle = styled.strong`
  display: block;
  font-size: 1.5rem;
  color: #666;
`;

export const HelpText = styled.p`
  margin-top: 0.5rem;
  padding-left: 0.2rem;
  font-size: 1.125rem;
  color: #a6a6a6;
`;
