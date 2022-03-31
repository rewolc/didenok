import "./leftNav.scss";
import logo from "../../assets/logo.svg";

import NavItem from "../navComponent/nav";

interface INav {
  active: boolean;
  text: string;
}

const LeftNav = () => {
  const navItems: INav[] = [
    { active: false, text: "Главная" },

    { active: false, text: "Мои задачи" },

    { active: false, text: "История изменений" },

    { active: false, text: "Команды" },

    { active: false, text: "Настройки" },
  ];

  return (
    <div className="nav-container">
      <div className="head">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="settings">
          <div className="dots">&#9679;&#9679;&#9679;</div>
        </div>
        <div className="nav-main"></div>
      </div>
      <div className="navItems">
        {navItems.map((i, indx) => (
          <NavItem key={indx} {...i} />
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
