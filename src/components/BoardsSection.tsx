import type { ReactNode } from "react";
import { useDrop } from "react-dnd";

type DragItem = {
  id: string;
  title: string;
  description: string;
};

type BoardsSectionProps = {
  onDrop: (item: DragItem) => void;
  children?: ReactNode;
};

export function BoardsSection(props: BoardsSectionProps) {
  const [, drop] = useDrop<DragItem, void, { isOver: boolean; canDrop: boolean }>({
    accept: "card",
    drop: (item) => props.onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  return (
    <div
      ref={drop as unknown as React.RefObject<HTMLDivElement>}
      style={{
        flex: 1,
        minWidth: 0,
        borderRight: "1px solid black",
        minHeight: "80vh",
        padding: 16,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {props.children}
    </div>
  );
}