import { useState } from "react";
import { Appbar } from "../components/Appbar";
import { BoardsSection } from "../components/BoardsSection";
import { Card } from "../components/Card";

type TaskStatus = "pending" | "ongoing" | "done";

type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
};

type DragItem = {
  id: string;
  title: string;
  description: string;
};

const initialTasks: Task[] = [
  { id: "2", title: "Node to bun migration", description: "Move website from node.js to bun", status: "ongoing" },
  { id: "3", title: "Node to bun migration", description: "Move website from node.js to bun", status: "done" },
];

export function Board() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const moveTask = (item: DragItem, status: TaskStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === item.id ? { ...task, status } : task
      )
    );
  };

  const pendingTasks = tasks.filter((task) => task.status === "pending");
  const onGoingTasks = tasks.filter((task) => task.status === "ongoing");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <>
      <Appbar />
      <div style={{ display: "flex", padding: 30 }}>
        <BoardsSection onDrop={(item) => moveTask(item, "pending")}>
          {pendingTasks.map((task) => (
            <Card
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
            />
          ))}
        </BoardsSection>

        <BoardsSection onDrop={(item) => moveTask(item, "ongoing")}>
          {onGoingTasks.map((task) => (
            <Card
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
            />
          ))}
        </BoardsSection>

        <BoardsSection onDrop={(item) => moveTask(item, "done")}>
          {doneTasks.map((task) => (
            <Card
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
            />
          ))}
        </BoardsSection>
      </div>
    </>
  );
}
