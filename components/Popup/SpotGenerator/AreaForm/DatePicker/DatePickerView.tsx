import React from 'react';
import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const DatePicker = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px slid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  box-shadow: 0 0 8px 1px ${painter.grayscale[7]};
  background-color: #fff;
`;

export const AreaTitle = styled.div`
  position: relative;
  width: 80px;
  height: 66px;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.strong`
  font-weight: 600;
  font-size: 16px;
  line-height: 66px;
`;

export const PrevMonthButton = styled.a.attrs({ href: '#', role: 'button' })`
  position: absolute;
  top: 0;
  left: -56px;
  width: 56px;
  height: 66px;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    margin: -5px 0 0 -3px;
    border: solid ${painter.primary.basic};
    border-width: 0 0 2px 2px;
    transform: rotate(45deg);
  }
`;

export const NextMonthButton = styled.a.attrs({ href: '#', role: 'button' })`
  position: absolute;
  top: 0;
  right: -56px;
  width: 56px;
  height: 66px;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    margin: -5px 0 0 -7px;
    border: solid ${painter.primary.basic};
    border-width: 0 2px 2px 0;
    transform: rotate(-45deg);
  }
`;

export const AreaTable = styled.div``;

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableDay = styled.th``;

export const TableDate = styled.td``;

export const Day = styled.div`
  height: 48px;
  font-weight: 700;
  font-size: 12px;
  line-height: 48px;
  text-align: center;
  color: ${painter.grayscale[6]};
`;

export const DateButton = styled.a.attrs({ href: '#', role: 'button' })`
  display: block;
  position: relative;
  z-index: 0;
  height: 48px;
  font-family: ${painter.font.roboto};
  font-size: 12px;
  line-height: 48px;
  text-align: center;
  color: ${painter.grayscale[2]};
  ${(props) =>
    props['aria-selected'] &&
    `
  font-weight: 700;
  color: ${props.theme.basic.white};
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 24px;
    background-color: ${props.theme.primary.light};
  }
  `}
`;
