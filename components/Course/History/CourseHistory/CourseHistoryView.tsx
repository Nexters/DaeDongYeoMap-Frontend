import styled from 'styled-components';

export const DatePickerLayer = styled.div`
  position: absolute;
  width: 100%;
`;

export const CoursePickerLayer = styled.div`
  margin-top: 420px;
  width: 100%;
  padding-bottom: 20px;
`;

export const CourseList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CourseItem = styled.li<{
  selectedTrue: boolean;
}>`
  display: inline-block;
  margin-bottom: 20px;
  ${(props) =>
    props['selectedTrue'] &&
    `
  display:none;
  `}
`;
