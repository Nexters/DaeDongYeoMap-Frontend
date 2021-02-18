import React from 'react';
import {
  useFormSubmitter,
  useFormTitleState,
} from '~/components/Course/Editor/CourseForm/CourseFormState';
import * as $ from './TextFormView';

const CHECKBOX_ID = 'daedong_chbox_allow';

const TextForm: React.FC = () => {
  const [formTitle, setFormTitle] = useFormTitleState();
  const submitForm = useFormSubmitter();

  const handleClickSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <>
      <$.TextForm>
        <$.Title>상세정보 입력하기</$.Title>
        <$.AreaFieldBox>
          <$.FieldBox>
            <$.FieldSet>
              <$.Label>코스 이름</$.Label>
              <$.InputBox>
                <$.Input
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="코스 이름을 입력해주세요"
                />
              </$.InputBox>
            </$.FieldSet>
          </$.FieldBox>
        </$.AreaFieldBox>
        <$.AreaCheckBox>
          <$.RealCheckBox id={CHECKBOX_ID} defaultChecked={true} />
          <$.ViewCheckBox />
          <$.CheckBoxLabel htmlFor={CHECKBOX_ID}>공개허용</$.CheckBoxLabel>
        </$.AreaCheckBox>
        <$.CheckboxAdvice>
          다른 사용자가 해당 데이트 코스에 대한 정보를 볼 수 있습니다.
        </$.CheckboxAdvice>
      </$.TextForm>
      <$.SubmitButton onClick={handleClickSubmit}>완료하기</$.SubmitButton>
    </>
  );
};

export default TextForm;
