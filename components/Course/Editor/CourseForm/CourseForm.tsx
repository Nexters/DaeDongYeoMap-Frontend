import React from 'react';
import TextForm from './TextForm';
import * as $ from './CourseFormView';

const CourseForm: React.FC = () => {
  return (
    <$.CourseForm>
      <TextForm />
    </$.CourseForm>
  );
};

export default CourseForm;
