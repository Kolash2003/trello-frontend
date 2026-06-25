import type { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
};

export function Button(props: ButtonProps) {
  return (
    <button style={{ backgroundColor: "blue", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer" }}>
      {props.children}
    </button>
  );
}