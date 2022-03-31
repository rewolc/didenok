import { TeamsState, IEmployee,IaddEmployee } from "../models/models";
import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTeams = createAsyncThunk(
  "team/fetchAll",
  async (_, thunkApi) => {
    const response = await axios.get<TeamsState[]>(
      "https://6244272539aae3e3b74c25f9.mockapi.io/api/didenok-task/1/teams"
    );

    return response.data;
  }
);
export const postTeams = createAsyncThunk(
  "team/post",

  async (leadName: string | number) => {
    const response = await axios.post<TeamsState[]>(
      "https://6244272539aae3e3b74c25f9.mockapi.io/api/didenok-task/1/teams",
      {
        leadName: `${leadName}`,
        employees: [],
      }
    );
    console.log(response.data);
    return response.data;
  }
);

export const addEmployee = createAsyncThunk(
  "team/post",

  async ( props : IaddEmployee) => {
    const response = await axios.put<IEmployee>(
      `https://6244272539aae3e3b74c25f9.mockapi.io/api/didenok-task/1/teams/${props.id}`,
      
      {
      employees: [{name : props.name }],
    }
    );
    console.log(response.data);
    return response.data;
  }
);





