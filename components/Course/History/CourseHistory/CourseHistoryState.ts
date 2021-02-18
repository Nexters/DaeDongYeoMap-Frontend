import { makeVar } from '@apollo/client';
import createReactiveVarHooks from '~/util/createReactiveVarHooks';
import storage from '~/storage';

import type { CourseView } from '~/components/Course/History/HistoryState';

type FormDateState = [number, number, number];

export const courseHistories = makeVar<CourseView[]>([]);
const formDateState = makeVar<FormDateState>(null);

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
