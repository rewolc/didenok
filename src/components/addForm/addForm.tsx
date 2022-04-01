import "./addForm.scss";
import { useState } from "react";
import { postTeams } from "../../redux/tems-reducer/team-actions";
import { useAppDispatch } from "../../redux/actions";
import { fetchTeams } from "../../redux/tems-reducer/team-actions";

const AddForm = () => {
  const [name, newName] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    newName(event.currentTarget.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (name.trim() !== "") {
      setTimeout(() => newName(""), 100);

      await dispatch(postTeams(name));
      await dispatch(fetchTeams());
    } else {
      alert("Введите имя команды");
    }
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
