import "./portfolio.scss"
import EducationList from "../educationList/educationList"
import { useState, useEffect } from "react"
import { eduList } from "../../eduData"
import React from 'react';
import sanfan from "../../asset/sanfan.jpg";
import carnegie from "../../asset/carnegie.png";
import uw from "../../asset/uw.jpg";
import { Fade } from "react-reveal";
import { Image, StyleSheet } from "react-native-web"

export default function Portfolio({contentChange, setContentChange}) {
    const [currSlide, setCurrSlide] = useState(0);
    const[selected, setSelected] = useState("highschool");
    const[data, setData] = useState([]);
    const list = [
        {
            idN:1,
            id: "highschool",
            title: "High School",
        },
        {
            idN:2,
            id: "summerschool",
            title: "Summer School",
        },
        {
            idN:3,
            id: "university",
            title: "University",
        },
    ]

    const styles = StyleSheet.create({
        container: {
          paddingTop: 50,
        },
        tinyLogo: {
          width: 50,
          height: 50,
        },
        logo: {
          width: 300,
          height: 300,
          borderRadius: 150
        },
    });
    // useEffect(() => {
        
    //     switch(selected){
    //         case "highschool":
    //             setData(highSchoolData);
    //             break;
    //         case "summerschool":
    //             setData(summerSchoolData);
    //             break;
    //         case "university":
    //             setData(universtyData);
    //             break;
    //     }
    // }, [selected])
    return (
        <div className="portfolio" id="education">
            <h1>Education Background</h1>
            <Fade top>
            <ul className="navTag">
                {list.map((item)=>(
                    <EducationList 
                    title={item.title} 
                    active={selected == item.id} 
                    setSelected={setSelected}
                    id={item.id}
                    idN = {item.idN}
                    setCurrSlide = {setCurrSlide}/>
                ))}
            </ul>
            </Fade>
            <div className="slider" style={{transform: `translateX(-${currSlide *100}vw)`}}>
                {eduList.map((d) =>(
                <div className="container">
                        <div className="item">
                        <Fade top>
                        <div className="left">
                            <div className="imgContainer">
                            <Image className="logo"
                                style={styles.logo}
                                source={d.img}
                            />
                            </div>
                        </div>
                        <div className="right">
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

                            <div className="links">
                                <a href={d.link1} target="_blank">{d.text1}</a>
                                <a href={d.link2} target="_blank">{d.text2}</a>
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>
                 ))}
            </div>
            </div>
    )
}
