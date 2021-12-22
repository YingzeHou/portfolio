import "./portfolio.scss"
import EducationList from "../educationList/educationList"
import { useState, useEffect } from "react"
import { highSchoolData, summerSchoolData, universtyData } from "../../eduData"
import React from 'react';
import Fade from 'react-reveal/Fade';
import {Spring} from "react-spring"

export default function Portfolio() {
    const[selected, setSelected] = useState("highschool");
    const[data, setData] = useState([]);
    const list = [
        {
            id: "highschool",
            title: "High School",
        },
        {
            id: "summerschool",
            title: "Summer School",
        },
        {
            id: "university",
            title: "University",
        },
    ]

    useEffect(() => {
        
        switch(selected){
            case "highschool":
                setData(highSchoolData);
                break;
            case "summerschool":
                setData(summerSchoolData);
                break;
            case "university":
                setData(universtyData);
                break;
        }
    }, [selected])
    return (
        <div className="portfolio" id="education">
            <h1>Education Background</h1>
            <ul className="navTag">
                {list.map((item)=>(
                    <EducationList 
                    title={item.title} 
                    active={selected == item.id} 
                    setSelected={setSelected}
                    id={item.id}/>
                ))}
            </ul>

            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <Fade top>
                        <img src={d.img} alt="" />
                        <h3>{d.name}</h3>
                        <div className="tag">
                            <span>{d.tag1}</span>
                            <span>{d.tag2}</span>
                            <span>{d.tag3}</span>
                        </div>
                        <div className="intro">
                            {d.firstLine}
                            <br />
                            <br />
                            {d.secondLine} 
                            <br />
                            <br />
                            {d.thirdLine} 
                        </div>
                        </Fade>
                </div>

                ))}
            </div>
        </div>
    )
}
