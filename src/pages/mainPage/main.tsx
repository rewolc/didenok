import "./main.scss";

import Team from "../../components/team/team";
import AddForm from "../../components/addForm/addForm";

import { useAppSelector } from "../../redux/actions";



const Main: React.FC = () => {

  const { teams } = useAppSelector((state) => state.teamsReducer);

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
