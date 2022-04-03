import "./employePage.scss";
import { useLocation } from "react-router";

import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/actions";

import { updateTeamInside } from "../../redux/tems-reducer/team-actions";

import VariousInpt from "../../components/variousInpt/variousInpt";
import Err from "../../components/error/error";

import { employeForm, underForm } from "../../forms/form";

const EmployePage: React.FC = () => {
  
  const employeName = decodeURI(useLocation().pathname.slice(3));
  const idEmployee = decodeURI(useLocation().pathname.slice(1, 2));

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { teams } = useAppSelector((state) => state.teamsReducer);
  const curEmployeeTeam = teams[+idEmployee - 1];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(updateTeamInside(curEmployeeTeam));
  };

  const handleCommentSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  if (curEmployeeTeam) {
    if (curEmployeeTeam.employees.find((empl) => empl.name === employeName)) {
      return (
        <div className="main-container">
          <div className="teams-header employee-header">
            <div className="go-back" onClick={() => navigate("../")}>
              <span className="triangle"> ◂ </span> Вернуться назад
            </div>
            <div className="teams-text teams-eml-text">{employeName}</div>
          </div>
          <div className="employee-card">Карточка Сотрудника</div>
          <div className="employee-info-container">
            <div className="employee-image"></div>
            <div className="employee-left">
              <div className="employee-filds">
                <form action="">
                  {employeForm.map((form, indx) => (
                    <VariousInpt
                      key={indx}
                      formName={Object.keys(form)}
                      name={employeName}
                      id={Number(idEmployee)}
                      team={curEmployeeTeam}
                    />
                  ))}
                  <input
                    type="submit"
                    value="сохранить"
                    className="employee-submit"
                    onClick={handleSubmit}
                  />
                </form>
              </div>
              <form action="">
                <input
                  type="text"
                  placeholder="Комментарии..."
                  className="employee-comment"
                />
                <input
                  type="submit"
                  value="сохранить"
                  className="employee-submit"
                  onClick={handleCommentSubmit}
                />
              </form>
            </div>
          </div>
          <div className="employee-card">Занятость сотрудника</div>
          <div className="employee-works-info-container">
            {underForm.map((form, indx) => (
              <div className="info-wrap" key={indx}>
                <div className="head-wrap">
                  <div className="head">{Object.keys(form)}</div>
                  <div className="span-dots">...</div>
                </div>
                <div className="strokes">
                  <div className="stroke">{Object.values(form)}</div>
                  <div className="stroke">{Object.values(form)}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="teams-container"></div>
        </div>
      );
    } else {
      return <Err text={`Cотрудник c именем ${employeName} не найден `} />;
    }
  } else {
    return <Err />;
  }
};

export default EmployePage;
