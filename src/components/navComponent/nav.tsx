import "./nav.scss";
import { useState, useEffect } from "react";

interface INavItem {
  active: boolean;
  text: string;
}

const NavItem: React.FC<{ active: boolean; text: string }> = ({
  active,
  text,
}) => {
  const [isActive, change] = useState(active);

  return (
    <div className="navItem-cont">
      <div
        className={`circle ${isActive ? "c-active" : "c-passive"}`}
        
      ></div>{" "}
      <div onClick={() => change(!isActive)}
        className={`navItem ${isActive ? "navItem-active" : "navItem-passive"}`}
      >
        {text}
      </div>
    </div>
  );
};

export default NavItem;
