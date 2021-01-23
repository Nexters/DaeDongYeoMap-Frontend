import React from 'react';
import styled from 'styled-components';

export const AreaForm = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
`;

export const SubmitButton = styled.a.attrs({ href: '#', role: 'button' })`
  display: block;
  height: 4rem;
  border-radius: 0.75rem;
  background-color: #101721;
  font-size: 1.25rem;
  line-height: 4rem;
  text-align: center;
  color: #fff;
`;
