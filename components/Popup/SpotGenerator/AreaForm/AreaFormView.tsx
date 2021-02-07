import React from 'react';
import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const AreaForm = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
  margin-top: 49px;
`;

export const FieldSet = styled.div`
  position: relative;
  & + & {
    margin-top: 42px;
  }
`;

export const FieldLabel = styled.strong`
  display: block;
  font-size: 20px;
  color: ${painter.grayscale['9']};
`;

export const FieldInputBox = styled.div`
  position: relative;
  height: 56px;
  margin-top: 16px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  background-color: #fff;
`;

export const InputVisitant = styled.input.attrs({
  type: 'text',
})`
  display: block;
  width: 100%;
  height: 100%;
  padding-left: 16px;
  font-weight: 600;
  font-size: 18px;
  color: ${painter.basic.black};
  ${painter.form.placeholder('#cdcdcd')}
`;

export const DateLabel = styled.strong<{
  isSelected: boolean;
}>`
  display: block;
  height: 100%;
  padding-left: 16px;
  font-weight: 600;
  font-size: 18px;
  line-height: 54px;
  color: ${(props) =>
    props.isSelected ? painter.basic.black(props) : '#cdcdcd'};
`;

export const DatePickerOpenButton = styled.a.attrs({ href: '#' })`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const SubmitButton = styled.a.attrs({ href: '#', role: 'button' })`
  display: block;
  height: 64px;
  margin-top: 41px;
  border-radius: 12px;
  background-color: #101721;
  font-weight: bold;
  font-size: 20px;
  line-height: 64px;
  text-align: center;
  color: ${painter.basic.white};
`;

export const DatePickerLayer = styled.div`
  position: absolute;
  z-index: 1;
  top: -358px;
  left: 0;
  width: 100%;
`;
