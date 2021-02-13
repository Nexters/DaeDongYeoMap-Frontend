import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const Tab = styled.div`
  position: absolute;
  z-index: 1;
  top: 56px;
  left: 50%;
  width: 268px;
  margin-left: -133px;
  border-radius: 24px;
  border: 1px solid ${painter.grayscale[3]};
  box-shadow: 0 1px 8px 1px ${painter.grayscale[2]};
  background-color: #fff;
`;

export const TabList = styled.ul`
  white-space: nowrap;
  font-size: 0;
`;

export const TabItem = styled.li`
  display: inline-block;
  width: 140px;
  vertical-align: top;
  &:first-child {
    margin-right: -14px;
  }
`;

export const TabLink = styled.a.attrs({ role: 'button' })`
  display: block;
  position: relative;
  width: 140px;
  height: 48px;
  border-radius: 24px;
  background-color: ${painter.basic.white};
  font-weight: 700;
  font-size: 16px;
  line-height: 47px;
  text-align: center;
  color: ${painter.grayscale[9]};
  cursor: pointer;
  ${(props) =>
    props['aria-selected'] &&
    `
  z-index: 1;
  background-color: ${painter.grayscale[9](props)};
  color: ${painter.basic.white(props)};
  `}
`;
