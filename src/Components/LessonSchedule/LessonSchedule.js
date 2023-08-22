import React, { useState } from "react";
import "./index.css";

const LessonSchedule = ({ scheduleVisible }) => {
  const [editingCell, setEditingCell] = useState(null);
  const [scheduleData, setScheduleData] = useState([
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
  ]);

  const handleCellDoubleClick = (rowIndex, columnIndex) => {
    setEditingCell({ row: rowIndex, column: columnIndex });
  };

  const handleCellKeyDown = (event, rowIndex, columnIndex) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setEditingCell(null);
    }
  };

  const handleCellChange = (event, rowIndex, columnIndex) => {
    const newScheduleData = [...scheduleData];
    newScheduleData[rowIndex][columnIndex] = event.target.value;
    setScheduleData(newScheduleData);
  };

  return (
    <div>
      <h2>Расписание уроков</h2>
      <table
        id="schedule-table"
        style={{ display: scheduleVisible ? "block" : "none" }}
      >
        <thead>
          <tr>
            <th>№</th>
            <th>Понедельник</th>
            <th>Вторник</th>
            <th>Среда</th>
            <th>Четверг</th>
            <th>Пятница</th>
          </tr>
        </thead>

        <tbody>
          {scheduleData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="vertical-header">{rowIndex + 1}</td>{" "}
              {/* Добавьте эту строку */}
              {row.map((cellValue, columnIndex) => (
                <td
                  key={columnIndex}
                  onDoubleClick={() =>
                    handleCellDoubleClick(rowIndex, columnIndex)
                  }
                >
                  {editingCell?.row === rowIndex &&
                  editingCell?.column === columnIndex ? (
                    <input
                      type="text"
                      value={cellValue}
                      onChange={(event) =>
                        handleCellChange(event, rowIndex, columnIndex)
                      }
                      onKeyDown={(event) =>
                        handleCellKeyDown(event, rowIndex, columnIndex)
                      }
                      onBlur={() => setEditingCell(null)}
                      autoFocus
                    />
                  ) : (
                    cellValue
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LessonSchedule;
