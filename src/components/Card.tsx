import { useDrag } from "react-dnd";
import type { LegacyRef } from "react";

type CardProps = {
    title: string;
    description: string;
    id: string;
};

type DragItem = {
    id: string;
    title: string;
    description: string;
};

export function Card({ title, description, id }: CardProps) {
    const [{ opacity }, dragRef] = useDrag<DragItem, void, { opacity: number }>(
        () => ({
            type: "card",
            item: { title, description, id },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1,
            }),
        })
    );

    return (
        <div
            ref={dragRef as unknown as LegacyRef<HTMLDivElement>}
            style={{
                opacity,
                border: "1px solid #b2bec3",
                borderRadius: 10,
                padding: 20,
                marginBottom: 20,
                cursor: "pointer",
                backgroundColor: "white",
            }}
        >
            <div style={{ margin: 10 }}>{title}</div>
            <div style={{ height: 1, width: "100%", backgroundColor: "black" }}></div>
            <div style={{ margin: 10 }}>{description}</div>
        </div>
    );
}