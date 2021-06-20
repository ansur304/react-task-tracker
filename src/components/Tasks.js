import { Task } from "./Task";

export const Tasks = ({ tasks, onDelete, onSetReminder }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onSetReminder={onSetReminder}
        />
      ))}
      <p>Note: Double click on Task to add a reminder.</p>
    </div>
  );
};
