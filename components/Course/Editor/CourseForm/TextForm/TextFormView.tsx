import styled from 'styled-components';
import painter from '~/styles/theme/painter';

export const TextForm = styled.div`
  margin-top: 32px;
  padding: 23px 23px 31px;
  border-radius: 8px;
  border: 1px solid ${painter.grayscale[1]};
  box-shadow: 0 0 4px 1px ${painter.grayscale[1]};
  background-color: ${painter.basic.white};
`;

export const Title = styled.strong`
  display: block;
  font-size: 18px;
  line-height: 24px;
`;

export const AreaFieldBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const FieldBox = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  width: 50%;
`;

export const FieldSet = styled.div``;

export const Label = styled.div`
  padding-left: 2px;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: ${painter.grayscale[9]};
`;

export const InputBox = styled.div`
  height: 48px;
  margin-top: 8px;
  border-radius: 8px;
  border: 1px solid ${painter.grayscale[2]};
  background-color: ${painter.grayscale[1]};
`;

export const Input = styled.input.attrs({ type: 'text' })`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0 12px;
  font-size: 16px;
  color: ${painter.basic.black};
  ${painter.form.placeholder('#ADB5BD')}
`;

export const AreaCheckBox = styled.div`
  position: relative;
  margin-top: 16px;
`;

export const ViewCheckBox = styled.div`
  display: inline-block;
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  border: 1px solid ${painter.grayscale[2]};
  background-color: ${painter.grayscale[1]};
  vertical-align: top;
  cursor: pointer;
`;

export const RealCheckBox = styled.input.attrs({ type: 'checkbox' })`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  clip: rect(0 0 0 0);
  &:checked + ${ViewCheckBox} {
    border-color: ${painter.grayscale[9]};
    background-color: ${painter.grayscale[9]};
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 4px;
      width: 10px;
      height: 4px;
      margin: auto;
      border: solid ${painter.basic.white};
      border-width: 0 0 2px 2px;
      transform: rotate(-45deg);
    }
  }
`;

export const CheckBoxLabel = styled.label`
  display: inline-block;
  position: relative;
  z-index: 1;
  line-height: 18px;
  font-size: 16px;
  margin-left: -18px;
  padding-left: 22px;
  vertical-align: top;
  color: ${painter.grayscale[9]};
  cursor: pointer;
`;

export const CheckboxAdvice = styled.p`
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  color: ${painter.grayscale[6]};
`;

export const SubmitButton = styled.a.attrs({ href: '#' })`
  display: block;
  width: 320px;
  height: 64px;
  margin: 31px auto 31px;
  border-radius: 8px;
  background-color: ${painter.basic.black};
  font-weight: 700;
  font-size: 20px;
  line-height: 64px;
  text-align: center;
  color: ${painter.basic.white};
`;
