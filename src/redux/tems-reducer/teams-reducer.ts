import { TeamsState, IAction } from "../interfaces/interfaces";
import {
  fetchTeams,
  postTeams,
  updateTeamInside,
  updateTeam,
} from "./team-actions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialTeamState {
  teams: TeamsState[];
  loading: boolean;
  error: string;
}

const initialState: InitialTeamState = {
  teams: [],
  loading: false,
  error: "",
};

export const teamSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    addName: (state, action: PayloadAction<IAction>) => {
      state.teams = state.teams.map((team) =>
        team.id === action.payload.id
          ? {
              ...team,
              employees: [...team.employees, { name: action.payload.name }],
            }
          : team
      );
    },

    removeName(state, action: PayloadAction<IAction>) {
      state.teams = state.teams.map((team) =>
        team.leadName === action.payload.leadName
          ? {
              ...team,
              employees: team.employees.filter(
                (employee,indx) => indx !== action.payload.indx
              ),
            }
          : team
      );
    },

    removeTeam(state, action: PayloadAction<IAction>) {
      state.teams = state.teams.filter((team) => team.id !== action.payload.id);
    },

    changeEmployeeInfo(state, action: PayloadAction<IAction>) {
      const { key, value, id, name } = action.payload;
      if (typeof key !== "string") {
        throw new Error();
      }
      state.teams = state.teams.map((team) =>
        +team.id === id
          ? {
              ...team,
              employees: team.employees.map((employee) =>
                employee.name === name
                  ? { ...employee, [key]: value }
                  : employee
              ),
            }
          : team
      );
    },
  },
  extraReducers: {
    [fetchTeams.fulfilled.type]: (
      state,
      action: PayloadAction<TeamsState[]>
    ) => {
      state.loading = false;
      state.error = "";
      state.teams = action.payload;
    },
    [fetchTeams.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchTeams.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    [postTeams.fulfilled.type]: (state, action: PayloadAction<TeamsState>) => {
      state.loading = false;
      state.error = "";
      state.teams = [...state.teams, action.payload];
    },

    [updateTeamInside.fulfilled.type]: (state, action: PayloadAction) => {
      state.loading = false;
      state.error = "";
    },
    [updateTeam.fulfilled.type]: (state, action: PayloadAction) => {
      state.loading = false;
      state.error = "";
    },
  },
});

export default teamSlice.reducer;
