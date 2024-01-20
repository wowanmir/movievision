import { type FC } from "react";
import "./content.css";

interface IContent {
  children: JSX.Element;
}

export const Content: FC<IContent> = ({ children }) => {
  return (
    <div className="content">
      {children}
    </div>
  );
};
