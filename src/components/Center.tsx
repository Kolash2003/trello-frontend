import type { ReactNode } from "react";

type CenterProps = {
  children?: ReactNode;
};

export function Center(props: CenterProps) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "lightgray", alignItems: "center", justifyContent: "center", display: "flex" }}>
      <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px" }}>
        {props.children}
      </div>
    </div>
  );
}