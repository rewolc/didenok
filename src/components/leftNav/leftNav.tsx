import "./leftNav.scss";
import logo from "../../assets/logo.svg";
import { useLocation } from "react-router-dom";

import NavItem from "../navComponent/nav";

interface INav {
  active: boolean;
  text: string;
}

const LeftNav = () => {
  const location = useLocation().pathname.length;

  const navItems: INav[] = [
    { active: false, text: "Главная" },

    { active: false, text: "Мои задачи" },

    { active: false, text: "История изменений" },

    { active: location === 1 ? true : false, text: "Команды" },

    { active: location !== 1 ? true : false, text: "Настройки" },
  ];

  return (
    <div className="nav-container">
      <div className="head">
        <div className="logo">
          <img src={logo} alt="logo" width="80%" height="100%" />
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
