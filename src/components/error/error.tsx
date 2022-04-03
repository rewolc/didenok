import { useNavigate } from "react-router";



const Err: React.FC<{ text?: string  }> = ({text}) => {
   const navigate = useNavigate()
  return (
    <div className="main-container">
      <div className="teams-header employee-header">
        <div className="go-back" onClick={() => navigate("../")}>
          <span className="triangle"> ◂ </span> Вернуться назад
        </div>
        <div className="teams-text teams-eml-text">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Err;
