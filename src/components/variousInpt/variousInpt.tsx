import "./variousInpt.scss";
import { useAppDispatch } from "../../redux/actions";
import { teamSlice } from "../../redux/tems-reducer/teams-reducer";
import { ITeamState } from "../../redux/interfaces/interfaces";

const VariousInpt: React.FC<{
  formName: string[];
  name: string;
  id: number;
  team: ITeamState;
}> = ({ formName, name, id, team }) => {
  const formNameString = formName.join("");

  const { changeEmployeeInfo } = teamSlice.actions;

  const dispatch = useAppDispatch();

  const curEmployee = team
    ? team.employees.find((employee) => employee.name === name)
    : "";

  const caret = { caretColor: "transparent" };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(
      changeEmployeeInfo({
        key: formNameString,
        value: event.currentTarget.value,
        name,
        id,
      })
    );
  };

  if (Boolean(curEmployee)) {
    return (
      <div className="form-vrap">
        <div className="fomrName">
          {formNameString === "name" ? "ФИО" : formNameString}:
        </div>
        <input
          placeholder=". . ."
          value={
            formNameString === "Руководитель группы"
              ? team.leadName
              : //@ts-ignore
                curEmployee[formNameString]
          }
          onChange={formNameString === "name" ? undefined : handleChange}
          style={
            formNameString === "name" ||
            formNameString === "Руководитель группы"
              ? caret
              : undefined
          }
        />
      </div>
    );
  } else {
    return <></>;
  }
};

export default VariousInpt;
