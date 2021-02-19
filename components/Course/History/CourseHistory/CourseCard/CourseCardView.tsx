import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const CourseCard = styled.div`
  border: 2px solid blue;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 0 0 8px 1px ${painter.grayscale[3]};
  transform: translate(0, 0);
`;
