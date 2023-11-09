import {type FC} from "react";
import "./Content.css"
interface IContent {
    children: JSX.Element
}

export const Content:FC<IContent> = ({children}) => {
    return (
        <div className="content-1">
            {children}
        </div>
    );
}