import { ITeamState } from "../interfaces/interfaces";
import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTeams = createAsyncThunk(
  "team/fetchAll",
  async (_, thunkApi) => {
    const response = await axios.get<ITeamState[]>(
      "https://6244272539aae3e3b74c25f9.mockapi.io/api/didenok-task/1/teams"
    );

    return response.data;
  }
);
export const postTeams = createAsyncThunk(
  "team/post",

  async (leadName: string | number) => {
    const response = await axios.post<ITeamState[]>(
      "https://6244272539aae3e3b74c25f9.mockapi.io/api/didenok-task/1/teams",
      {
        leadName: `${leadName}`,
        employees: [],
      }
    );

    return response.data;
  }
);

export const updateTeamInside = createAsyncThunk(
  "team/updateTeamInside",

  async (props: ITeamState) => {
    const response = await axios.put<ITeamState>(
      `https://6244272539aae3e3b74c25f9.mockapi.io/api/didenok-task/1/teams/${props.id}`,

      {
        ...props,
      }
    );

    return response.data;
  }
);

export const updateTeam = createAsyncThunk(
  "team/updateTeam",

  async (id: number) => {
    const response = await axios.delete<ITeamState>(
      `https://6244272539aae3e3b74c25f9.mockapi.io/api/didenok-task/1/teams/${id}`
    );

    return response.data;
  }
);
