import "./employePage.scss";
import { useLocation } from "react-router";
import { useAppSelector } from "../../redux/actions";
import { useState } from "react";
import { useNavigate } from "react-router";
import VariousInpt from "../../components/variousInpt/variousInpt";
const EmployePage = () => {
  const employeName = decodeURI(useLocation().pathname.slice(3));
  const idEmployee = decodeURI(useLocation().pathname.slice(1,2));
  console.log(idEmployee)
  let { teams } = useAppSelector((state) => state.teamsReducer);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const employeForm = [
    { "ФИО:": "" },
    { "Дата рождения:": "" },
    { "Гражданство:": "" },
    { "Адрес проживания:": "" },
    { "Дата рождения": "" },
    { "Должность:": "" },
    { "Телефон:": "" },
    { "Почта (личная):": "" },
    { "Почта (рабочая, если есть):": "" },
    { "Дата приема на работу:": "" },
    { "Размер оплаты труда:": "" },
    { Оформление: "" },
  ];
  const underForm = [
    { Клиент: "Введите текст..." },
    { Проект: "Текст..." },
    { Этап: "Название этапа" },
    { Дедлайн: "00.00.00 00:00" },
    { Статус: "Установить статус" },
  ];
  const navigate = useNavigate();
  console.log(employeForm[0].valueOf());
  return (
    <div className="main-container">
      <div className="teams-header employee-header">
        <div className="go-back" onClick={() => navigate("../")}>
          <span className="triangle"> ◂ </span> Вернуться назад
        </div>
        <div className="teams-text">{employeName}</div>
      </div>
      <div className="employee-card">Карточка Сотрудника</div>
      <div className="employee-info-container">
        <div className="employee-image"></div>
        <div className="employee-left">
          <div className="employee-filds">
            <form action="">
              {employeForm.map((form,indx) => (
               <VariousInpt key={indx} formName={Object.keys(form)} value={Object.values(form)} name={employeName} id={Number(idEmployee)}  />
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
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
      <div className="employee-card">Занятость сотрудника</div>
      <div className="employee-works-info-container">
        {underForm.map((form) => (
          <div className="info-wrap">
            {" "}
            <div className="head-wrap">
              <div className="head">{Object.keys(form)}</div>
              <div className="span-dots">...</div>
            </div>
            <div className="strokes">
              <div className="stroke">{Object.values(form)}</div>
              <div className="stroke">{Object.values(form)}</div>
            </div>{" "}
          </div>
        ))}
      </div>
      <div className="teams-container"></div>
    </div>
  );
};

export default EmployePage;
