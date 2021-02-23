import { makeVar } from '@apollo/client';
import createReactiveVarHooks from '~/util/createReactiveVarHooks';
import type { CourseCardRecord } from '~/@types/record.d';

type FormDateState = [number, number, number];

export const courseHistories = makeVar<CourseCardRecord[]>([]);

const todayDate = new Date();
const formDateState = makeVar<FormDateState>([
  todayDate.getFullYear(),
  todayDate.getMonth() + 1,
  todayDate.getDate(),
]);

export const [
  useCourseHistories,
  useCourseHistoriesSetter,
  useCourseHistoriesState,
] = createReactiveVarHooks(courseHistories);

export const [
  useFormDate,
  useFormDateSetter,
  useFormDateState,
] = createReactiveVarHooks(formDateState);
