import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;

export default Wrap;
