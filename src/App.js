import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
import { useState } from "react";
import { AddTask } from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Doctor Appointment",
      date: "2021-06-16",
      time: "08:00",
      reminder: true,
    },
    {
      id: 2,
      name: "Birthday party",
      date: "2021-06-18",
      time: "10:50",
      reminder: true,
    },
    {
      id: 3,
      name: "Visa Biometrics",
      date: "2021-06-20",
      time: "11:10",
      reminder: true,
    },
    {
      id: 4,
      name: "Shopping ",
      date: "2021-07-02",
      time: "14:50",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const setReminder = (id) => {
    setTasks(
      tasks.map((task) => (task.id === id ? toggleReminder(task) : task))
    );
  };

  const toggleReminder = (task) => {
    task.reminder = !task.reminder;
    return task;
  };

  const addTask = (newTask) => {
    newTask.id = Math.max(...tasks.map((task) => task.id), 0) + 1;
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header />
      <AddTask addTask={addTask} />
      {tasks && tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onSetReminder={setReminder}
        />
      ) : (
        "Oops! No tasks to show."
      )}
    </div>
  );
};

export default App;
