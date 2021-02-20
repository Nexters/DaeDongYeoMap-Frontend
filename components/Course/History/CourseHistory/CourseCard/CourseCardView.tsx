import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const CourseCard = styled.div`
  border-radius: 16px;
  background-color: #fff;
  filter: drop-shadow(0px 1px 4px ${painter.grayscale['4']});
  transform: translate(0, 0);
  padding: 24px;
  width: 400px;
  &:active {
    border: 1px solid ${painter.primary.basic};
  }
  &:hover {
    border: 1px solid ${painter.primary.basic};
  }
`;

export const CourseSticker = styled.img.attrs((props) => ({
  src: props.src,
}))`
  cursor: pointer;
`;

export const CourseTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

export const CourseSpotsAndDate = styled.div`
  display: flex;
  margin-top: 5px;
`;

export const CourseSpots = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${painter.grayscale['8']};
`;

export const CourseDate = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${painter.grayscale['8']};
  margin-left: 10px;
`;
