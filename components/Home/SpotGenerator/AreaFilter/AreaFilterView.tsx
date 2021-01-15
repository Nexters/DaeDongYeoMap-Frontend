import React from 'react';
import styled from 'styled-components';

export const AreaFilter = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
`;

export const MoodList = styled.ul`
  margin-top: 1.875rem;
  font-size: 0;
`;

export const MoodItem = styled.li`
  display: inline-block;
  vertical-align: top;
  & + & {
    margin-left: 0.75rem;
  }
`;

export const MoodButton = styled.a.attrs({ href: '#', role: 'button' })`
  display: block;
  height: 2.5rem;
  border-radius: 1.25rem;
  border: 0.0625rem solid #d0d0d0;
  padding: 0 1.25rem;
  font-size: 1rem;
  line-height: ${2.5 - 0.0625}rem;
  background-color: #fff;
  color: ${(props) => props.color};
`;
