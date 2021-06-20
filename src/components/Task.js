import { FaTimes } from "react-icons/fa";

export const Task = ({ task, onDelete, onSetReminder }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onSetReminder(task.id)}
    >
      <h3>
        {task.name}
        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>
        {task.date} {task.time}
      </p>
    </div>
    <p>Note: Double click on Task to add a reminder.</p>
  );
};
