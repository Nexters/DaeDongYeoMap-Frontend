import { makeVar } from '@apollo/client';
import createReactiveVarHooks from '~/util/createReactiveVarHooks';
import storage from '~/storage';

import type { CourseView } from '~/components/Course/History/HistoryState';

type FormDateState = [number, number, number];

export const courseHistories = makeVar<CourseView[]>([]);

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
