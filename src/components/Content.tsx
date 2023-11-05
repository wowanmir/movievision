import {type FC} from "react";
interface IContent {
    children: JSX.Element
}

export const Content:FC<IContent> = ({children}) => {
    return (
        <div style={{backgroundColor:"red"}}>
            {children}
        </div>
    );
}