import { makeVar } from '@apollo/client';
import createReactiveVarHooks from '~/util/createReactiveVarHooks';
import type { SpotView } from '../EditorState';
import { useEndSpotsRemover } from '../CandidateSpots/CandidateSpotsState';
import { useSpotFormResetter } from './SpotForm/SpotFormState';

const formTitle = makeVar<string>('');
const formSpots = makeVar<SpotView[]>([]);

export const [
  useFormTitle,
  useFormTitleSetter,
  useFormTitleState,
] = createReactiveVarHooks(formTitle);

export const [
  useFormSpots,
  useFormSpotsSetter,
  useFormSpotsState,
] = createReactiveVarHooks(formSpots);

export const useFormSubmitter = (): (() => void) => {
  const removeEndSpots = useEndSpotsRemover();
  const resetSpotForm = useSpotFormResetter();

  return () => {
    removeEndSpots();
    resetSpotForm();
  };
};
