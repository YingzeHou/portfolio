import "./educationList.scss"
import { useState, useEffect } from "react"

export default function EducationList({title, active, setSelected, id, idN, setCurrSlide}) {
    const handleClick = (id) => {
        setSelected(id);
        setCurrSlide(idN-1);
    }
    return (
        <li className={active ? "educationList active": "educationList"} onClick={()=>handleClick(id)}>
            {title}
        </li>
    )
}
