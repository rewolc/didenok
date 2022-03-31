import "./employee.scss";

import { teamSlice } from "../../redux/tems-reducer/teams-reducer";
import { useAppDispatch } from "../../redux/actions";

const Employee: React.FC<{ name: string; leadName: string }> = ({ name, leadName }) => {
  console.log(leadName)
  const dispatch = useAppDispatch()
  const { removeName } = teamSlice.actions;
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
