import { IEmployee } from "../../redux/models/models";
import Employee from "../employee/employee";
import { useState } from "react";
import "./team.scss";
import { teamSlice } from "../../redux/tems-reducer/teams-reducer";
import { useAppDispatch } from "../../redux/actions";
import { updateTeam } from "../../redux/tems-reducer/team-actions";
const Team: React.FC<{
  leadName: string;
  employees: IEmployee[];
  id?: number;
}> = ({ leadName, employees, id }) => {
  const dispatch = useAppDispatch();
  const { addName, removeTeam } = teamSlice.actions;
  let show = false;
  const [isActive, change] = useState(show);
  const [name, newletter] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name.trim() !== "") {
      dispatch(addName({ leadName, name }));
      setTimeout(() => newletter(""), 100);
    } else {
      alert("Введите имя сотрудника");
    }
  };
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    newletter(event.currentTarget.value);
  };
  const removeClick = (event: React.FormEvent) => {
    event.stopPropagation();
    dispatch(removeTeam({ id }));
    dispatch(updateTeam(id!));
  };
  return (
    <div className="team">
      <div
        className={`leader ${isActive ? "coolColor" : ""}`}
        onClick={() => change(!isActive)}
      >
        {leadName}{" "}
        <span className="teams-add small del" onClick={removeClick}>
          {" "}
          +{" "}
        </span>{" "}
      </div>

      <div
        className={`employees-list-container ${
          isActive ? "active" : "passive"
        }`}
      >
        <div className="add-employee">Добавить сотрудника</div>
        <form className={`add-employee-form `} onSubmit={handleSubmit}>
          <input
            type="text"
            className="add-employee-text"
            placeholder="ФИО сотрудника"
            onChange={handleChange}
            value={name}
          />
          <input type="submit" value="+" className="teams-add small " />
        </form>
        {employees.map((i, indx) => (
          <Employee key={indx} id={id!} leadName={leadName} name={i.name!} />
        ))}
      </div>
    </div>
  );
};

export default Team;
