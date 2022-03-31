import "./employee.scss";
import {
  updateTeamInside,
  updateTeam,
} from "../../redux/tems-reducer/team-actions";
import { teamSlice } from "../../redux/tems-reducer/teams-reducer";
import { useAppDispatch, useAppSelector } from "../../redux/actions";
import { useEffect } from "react";

const Employee: React.FC<{ name: string; leadName: string; id: number }> = ({
  name,
  leadName,
  id,
}) => {
  let { teams } = useAppSelector((state) => state.teamsReducer);
  let emplTeam = { ...teams.filter((team) => team.leadName === leadName) };

  const dispatch = useAppDispatch();
  const { removeName } = teamSlice.actions;

  useEffect(() => {
    dispatch(updateTeamInside(emplTeam[0]));
  }, [emplTeam]);

  return (
    <div className="employee-container">
      <div className="employee">{name ? name : ""}</div>
      <div
        className="teams-add small del"
        onClick={() => dispatch(removeName({ leadName, name }))}
      >
        {" "}
        +{" "}
      </div>
      <div className="go-to-employee">&#8735;</div>
    </div>
  );
};

export default Employee;
