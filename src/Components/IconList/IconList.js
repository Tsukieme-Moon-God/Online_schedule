import React from "react";
import "./index.css";

const IconList = ({ toggleSchedule }) => {
  return (
    <div className="icon-div">
      <img
        className="icon"
        src={require("./WhatsApp_Image_2023-08-22_at_13.05.09-removebg-preview.png")}
        alt="icon"
      />
      <img
        className="entTheLyceum"
        src={require("./icon_licai.jpeg")}
        alt="Вход в лицей"
      />
      <ul className="group-list">
        <li className="group-item" onClick={toggleSchedule}>
          Группа 1
        </li>
        <li className="group-item" onClick={toggleSchedule}>
          Группа 2
        </li>
        <li className="group-item" onClick={toggleSchedule}>
          Группа 3
        </li>
        <li className="group-item" onClick={toggleSchedule}>
          Контракт 1
        </li>
        <li className="group-item" onClick={toggleSchedule}>
          Контракт 2
        </li>
      </ul>
    </div>
  );
};

export default IconList;
