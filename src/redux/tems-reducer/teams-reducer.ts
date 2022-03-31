import { TeamsState, IEmployee, IaddEmployee, IAction } from "../models/models";
import { fetchTeams, postTeams, addEmployee } from "./team-actions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialTeamState {
  teams: TeamsState[];
  // loading: boolean;
  // error: string;
}

const initialState: InitialTeamState = {
  teams: [],
  // loading: false,
  // error: "",
};

export const teamSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    addName: (state, action: PayloadAction<IAction>) => {
      state.teams.map((i) =>
        i.leadName === action.payload.leadName
          ? [...i.employees, { name: action.payload.name }]
          : i
      );
    },

    removeName(state, action: PayloadAction<IAction>) {
       state.teams.map((i) =>
        i.leadName === action.payload.leadName
          ? i.employees.filter((n) => n.name != action.payload.name)
          : i
      );

      //  return state.teams.map((i) =>{
      //   if( i.leadName === action.payload.leadName)
      //     {return  i.employees.filter((empl) => empl.name !== action.payload.name)}
      //     else { return i}
      // })
    },
  },
  extraReducers: {
    [fetchTeams.fulfilled.type]: (
      state,
      action: PayloadAction<TeamsState[]>
    ) => {
      // state.loading = false;
      // state.error = "";
      state.teams = action.payload;
    },
    // [fetchTeams.pending.type]: (state) => {
    //   state.loading = true;
    // },
    // [fetchTeams.rejected.type]: (state, action: PayloadAction<string>) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    [postTeams.fulfilled.type]: (state, action: PayloadAction<TeamsState>) => {
      // state.loading = false;
      // state.error = "";
      state.teams = [...state.teams, action.payload];
    },
    [addEmployee.fulfilled.type]: (
      state,
      action: PayloadAction<IaddEmployee>
    ) => {
      const empName = action.payload.name;
      // state.loading = false;
      // state.error = "";
      state.teams.map((i) =>
        i.id === action.payload.id ? [...i.employees, { empName }] : i
      );
    },
  },
});
export const { addName, removeName } = teamSlice.actions;
export default teamSlice.reducer;
