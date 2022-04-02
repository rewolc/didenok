import "./nav.scss";

import { useLocation } from "react-router-dom";

const NavItem: React.FC<{ text: string }> = ({ text }) => {
  const location = useLocation().pathname.length;
  return (
    <div className="navItem-cont">
      <div
        className={`circle ${
          location === 1
            ? text === "Команды"
              ? "c-active"
              : "c-passive"
            : location !== 1
            ? text === "Настройки"
              ? "c-active"
              : "c-passive"
            : "c-passive"
        } `}
      ></div>
      <div
        className={`navItem ${
          location === 1
            ? text === "Команды"
              ? "navItem-active"
              : "navItem-passive"
            : location !== 1
            ? text === "Настройки"
              ? "navItem-active"
              : "navItem-passive"
            : "navItem-passive"
        } `}
      >
        {text}
      </div>
    </div>
  );
};

export default NavItem;
