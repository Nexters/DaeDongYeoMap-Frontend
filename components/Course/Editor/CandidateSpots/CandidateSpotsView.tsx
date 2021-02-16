import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const CandidateSpots = styled.div`
  height: 100%;
  padding-top: 80px;
  overflow-y: auto;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

export const AreaTitle = styled.h3`
  padding: 0 40px;
  font-size: 28px;
  line-height: 40px;
  color: ${painter.grayscale[9]};
`;

export const AreaSpots = styled.div`
  margin-top: 24px;
  padding: 0 24px;
`;

export const SpotList = styled.ul``;

export const SpotItem = styled.li`
  display: inline-block;
  width: 168px;
  height: 168px;
  margin: 16px;
  vertical-align: top;
`;
