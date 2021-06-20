import { useState } from "react";
import Button from "./Button";

export const AddTask = ({ addTask }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSave = (e) => {
    e.preventDefault();

    if (!name) {
      window.alert("Please enter task name!");
      return;
    }

    if (!date) {
      window.alert("Please enter task date!");
      return;
    }

    if (!time) {
      window.alert("Please enter task time!");
      return;
    }

    const newTask = {
      name: name,
      date: date,
      time: time,
      reminder: reminder,
    };

    addTask(newTask);

    setName("");
    setDate("");
    setTime("");
    setReminder(false);
  };

  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task Name</label>
        <input
          value={name}
          placeholder="Add task name"
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          value={date}
          type="date"
          className="form-control-input"
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </div>

      <div className="form-control">
        <label>Time</label>
        <input
          value={time}
          type="time"
          onChange={(e) => setTime(e.target.value)}
        ></input>
      </div>

      <div className="form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        ></input>
      </div>
      <Button
        label="Add Task"
        onClick={onSave}
        cssStyle="btn btn-block"
      ></Button>
    </form>
  );
};
