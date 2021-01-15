import React from 'react';
import styled from 'styled-components';

export const PageForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 7rem);
  padding: 2.5rem 2rem 3rem;
`;

export const AreaForm = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
`;

export const AreaButton = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
`;

export const CompleteButton = styled.a.attrs({ href: '#', role: 'button' })`
  display: block;
  height: 4rem;
  border-radius: 0.75rem;
  background-color: #101721;
  font-size: 1.25rem;
  line-height: 4rem;
  text-align: center;
  color: #fff;
`;
