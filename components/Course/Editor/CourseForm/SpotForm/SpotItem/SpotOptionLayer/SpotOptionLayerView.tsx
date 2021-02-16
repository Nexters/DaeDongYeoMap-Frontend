import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const SpotOptionLayer = styled.div`
  position: absolute;
  top: 160px;
  left: 90px;
  width: 164px;
  border-radius: 8px;
  border: 1px solid ${painter.grayscale[3]};
  box-shadow: 0 0 8px 1px ${painter.grayscale[3]};
  background-color: ${painter.basic.white};
`;

export const Button = styled.a.attrs({ href: '#' })`
  display: block;
  height: 40px;
  padding-left: 40px;
  font-size: 14px;
  line-height: 40px;
  color: ${painter.grayscale[9]};
`;
