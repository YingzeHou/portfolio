import"./intro.scss"
// import avatar from "../../asset/avatar.JPG"
import avatar from "../../asset/badge.jpg"
import { KeyboardArrowDownSharp } from "@mui/icons-material"
import {init} from "ityped"
import{useEffect, useRef} from "react"
import { Fade } from "react-reveal"

export default function Intro() {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor:true,
            backDelay: 1000,
            backSpeed: 60,
            strings:["Student @ UW-Madison", "Research Assistant @ DBMS/AR Field", "Previous SDE Intern @ Meituan and Anaplan", "Ethusiastic Learner"],
        });
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                <Fade top>
                    <img src={avatar} alt="Avatar" />
                </Fade>
                </div>
            </div>
            <div className="right">
                <Fade top>
                <div className="wrapper">
                    <h2>Hi, I am</h2>
                    <h1>Yingze Hou</h1>
                    <h3>
                        :&nbsp;
                        <span ref={textRef}></span>
                    </h3>
                </div>
                </Fade>
                <a href="#education">
                    <KeyboardArrowDownSharp className="icon"/>
                </a>
            </div>
        </div>
    )
}
