import { useReactiveVar, ReactiveVar } from '@apollo/client';

export type StateSetter<State> = (newState: State) => void;
export type UseValueHook<State> = () => State;
export type UseSetterHook<State> = () => StateSetter<State>;
export type UseStateHook<State> = () => [State, StateSetter<State>];
export type HookSet<State> = [
  UseValueHook<State>,
  UseSetterHook<State>,
  UseStateHook<State>
];

function createReactiveVarHooks<State>(
  reactiveVar: ReactiveVar<State>
): HookSet<State> {
  const useValueHook: UseValueHook<State> = () => {
    return useReactiveVar(reactiveVar);
  };

  const useSetterHook: UseSetterHook<State> = () => {
    return (newState: State) => reactiveVar(newState);
  };

  const useStateHook: UseStateHook<State> = () => {
    return [useValueHook(), useSetterHook()];
  };

  return [useValueHook, useSetterHook, useStateHook];
}

export default createReactiveVarHooks;
