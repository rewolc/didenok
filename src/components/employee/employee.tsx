import "./employee.scss";
import { updateTeamInside } from "../../redux/tems-reducer/team-actions";
import { teamSlice } from "../../redux/tems-reducer/teams-reducer";
import { useAppDispatch, useAppSelector } from "../../redux/actions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Employee: React.FC<{ name: string; leadName: string; id: number ,indx : number }> = ({
  name,
  leadName,
  id,
  indx
}) => {
  const navigate = useNavigate();

  const { teams } = useAppSelector((state) => state.teamsReducer);
  const emplTeam = { ...teams.filter((team) => team.leadName === leadName) };

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
        onClick={() => dispatch(removeName({ leadName, name, indx }))}
      >
        +
      </div>
      <div
        className="go-to-employee"
        onClick={() => navigate(`/${id}/${name}`)}
      >
        &#8735;
      </div>
    </div>
  );
};

export default Employee;
