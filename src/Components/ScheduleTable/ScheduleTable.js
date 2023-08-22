import React, { useState } from "react";
import IconList from "../IconList/IconList";
import LessonSchedule from "../LessonSchedule/LessonSchedule";

const ScheduleTable = () => {
  const [scheduleVisible, setScheduleVisible] = useState(false);

  const toggleSchedule = () => {
    setScheduleVisible(!scheduleVisible);
  };

  return (
    <div>
      <IconList toggleSchedule={toggleSchedule} />
      <LessonSchedule scheduleVisible={scheduleVisible} />
    </div>
  );
};

export default ScheduleTable;
