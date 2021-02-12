import React from 'react';
import SpotForm from './SpotForm';
import TextForm from './TextForm';
import * as $ from './CourseFormView';

const CourseForm: React.FC = () => {
  return (
    <$.CourseForm>
      <SpotForm />
      <TextForm />
    </$.CourseForm>
  );
};

export default CourseForm;
