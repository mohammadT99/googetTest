import React from "react";
import './style.scss';
import { Link } from "react-router-dom";
const Btn = ({style ,name , icon }) => {
    return (
        <div className={` ${style}`}>
            <Link className="link"> {icon} {name} </Link>
        </div>
    )   
}
export default Btn ;