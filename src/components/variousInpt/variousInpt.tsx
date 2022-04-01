import "./variousInpt.scss";
import { useState } from "react";
import { useAppDispatch } from "../../redux/actions";
import { teamSlice } from "../../redux/tems-reducer/teams-reducer";



const VariousInpt: React.FC<{
  formName: string[];
  value: string[];
  name: string;
  id: number
}> = ({ formName, value,name,id }) => {
   const { changeEmployeeInfo } = teamSlice.actions;
   const dispatch = useAppDispatch();
  const [state, newState] = useState(value.toString());
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    newState(event.currentTarget.value);
    dispatch(changeEmployeeInfo({name}))
  };
  return (
    <div className="form-vrap">
      <div className="fomrName">{formName}</div>
      <input placeholder=". . ." value={state} onChange={handleChange} />
    </div>
  );
};

export default VariousInpt;
