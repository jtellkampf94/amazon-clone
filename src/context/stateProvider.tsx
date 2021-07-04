import { createContext, useContext, useReducer } from "react";
import { Action } from "./actions";
import { initialState, State } from "./reducer";

interface ContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const StateContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => {}
});

interface StateProviderProps {
  reducer: (state: State, action: Action) => State;
  initialState: State;
}

export const StateProvider: React.FC<StateProviderProps> = ({
  reducer,
  initialState,
  children
}) => {
  const [state, stateDispatch] = useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState
  );

  return (
    <StateContext.Provider value={{ state, dispatch: stateDispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
