import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState, MembersState, MembersActions } from "./reducer";

// Create a context for accessing the members state
const MembersStateContext = createContext<MembersState | undefined>(undefined);

// Define a custom hook for conveniently accessing the members state
export const useMembersState = (): MembersState => {
  const context = useContext(MembersStateContext);
  if (!context) {
    throw new Error("useMembersState must be used within a MembersProvider");
  }
  return context;
};

// Create a context for accessing the members dispatch function
type MembersDispatch = React.Dispatch<MembersActions>;
const MembersDispatchContext = createContext<MembersDispatch | undefined>(undefined);

export const useMembersDispatch = (): MembersDispatch => {
  const context = useContext(MembersDispatchContext);
  if (!context) {
    throw new Error("useMembersDispatch must be used within a MembersProvider");
  }
  return context;
};

export const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [membersState, membersDispatch] = useReducer(reducer, initialState);

  return (
    <MembersStateContext.Provider value={membersState}>
      <MembersDispatchContext.Provider value={membersDispatch}>
        {children}
      </MembersDispatchContext.Provider>
    </MembersStateContext.Provider>
  );
};
