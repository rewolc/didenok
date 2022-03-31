import "./addForm.scss";
import { SetStateAction, useState } from "react";
import { postTeams } from "../../redux/tems-reducer/team-actions";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/actions";
import { teamSlice } from "../../redux/tems-reducer/teams-reducer";
import { fetchTeams } from "../../redux/tems-reducer/team-actions";
const AddForm = () => {
  const [name, newName] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    newName(event.currentTarget.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setTimeout(() => newName(""), 300);

    await dispatch(postTeams(name));
    await dispatch(fetchTeams());
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input type="submit" className="teams-add " value="+" />
      <input
        type="text"
        className="add-inpt"
        value={name}
        placeholder="Добавить команду"
        onChange={handleChange}
      />
    </form>
  );
};

export default AddForm;
