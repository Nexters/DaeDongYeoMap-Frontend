import React from 'react';
import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const AreaForm = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
`;

export const SubmitButton = styled.a.attrs({ href: '#', role: 'button' })`
  display: block;
  height: 64px;
  border-radius: 12px;
  background-color: #101721;
  font-weight: bold;
  font-size: 20px;
  line-height: 64px;
  text-align: center;
  color: ${painter.basic.white};
`;
