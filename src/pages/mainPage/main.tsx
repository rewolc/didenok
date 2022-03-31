import Team from "../../components/team/team";
import { fetchTeams } from "../../redux/tems-reducer/team-actions";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/actions";
import "./main.scss";
import AddForm from "../../components/addForm/addForm";

const Main: React.FC = () => {
  let { teams } = useAppSelector((state) => state.teamsReducer);

  return (
    <div className="main-container">
      <div className="teams-header">
        <div className="teams-text">Команды</div>
        <AddForm />
      </div>
      <div className="teams-container">
        {teams.map((i, indx) => (
          <Team key={indx} {...i} />
        ))}
      </div>
    </div>
  );
};

export default Main;
