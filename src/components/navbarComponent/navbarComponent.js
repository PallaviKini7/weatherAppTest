import "./navbarComponent.css";

import "react-tabs/style/react-tabs.css";
import HomeTab from "../footer/footer";
import Favourite from "../favourite/favourite";
import Recent from "../recent/recent";
import { Route, Routes, NavLink } from "react-router-dom";
import {useState } from "react";

const NavbarComponent = () => {
  const [value, onChange] = useState("");

  const date = new Date();

  setInterval(function () {
    today();
  }, 1000);

  const today = () => {
    onChange(
      `${date.toLocaleString("en-us", {
        weekday: "short",
      })} ${date.getDate()}, ${date.toLocaleString("en-us", {
        month: "short",
      })} ${date.getFullYear()}  ${date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        // second: "numeric",
        hour12: true,
      })}`
    );
  };

  return (
    <div>
      <div className="tabLinks">
        <div className="tabsSelect">
          <NavLink to="/" className="linkNames">
            <div className="home">
            HOME
            </div>
          </NavLink>
          <NavLink to="/fav" className="linkNames">
            <div className="fav">FAVOURITE</div>
            
          </NavLink>
          <NavLink to="/recent" className="linkNames">
            <div className="recent">RECENT SEARCH</div>
          </NavLink>
        </div>
        <div className="dateDisplay">
          <div>{value}</div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomeTab value={value} />} />
        <Route path="/fav" element={<Favourite />} />
        <Route path="/recent" element={<Recent />} />
      </Routes>
    </div>
  );
};

export default NavbarComponent;
