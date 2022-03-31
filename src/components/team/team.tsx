import { IEmployee } from "../../redux/models/models";
import Employee from "../employee/employee";
import { useState } from "react";
import "./team.scss";





const Team: React.FC<{
  leadName: string;
  employees: IEmployee[];
  key?: number;
}> = ({ leadName, employees }) => {
  let show = false;
  const [isActive, change] = useState(show);
  return (
    <div className="team">
      <div className = {`leader ${isActive ? "coolColor" : ''}`} onClick={() => change(!isActive)} >
        {leadName} <span className="teams-add small del"> + </span>{" "}
      </div>

      <div className= {`employees-list-container ${isActive ? "active" : "passive"}`} >
        <div className="add-employee" >
          Добавить сотрудника
        </div>
        <form className={`add-employee-form `}>
          <input
            className='add-employee-text'
            placeholder="ФИО сотрудника"
          />
          <input type="submit" value="+" className="teams-add small " />
        </form>
         { employees.map((i) => <Employee key={leadName} leadName={leadName} name={i.name!} />)}

      </div>
    </div>
  );
};

export default Team;
