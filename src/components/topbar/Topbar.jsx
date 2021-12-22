import { Lightbulb } from "@mui/icons-material"
import "./topbar.scss"

export default function Topbar(){
    return(
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <Lightbulb/>
                    <a href="#cover" className="logo">Portfolio</a>
                </div>
                <div className="right">
                    <a href="#intro" className="navItem">Introduction</a>
                    <a href="#education" className="navItem">Education</a>
                    <a href="#experience" className="navItem">Experience</a>
                    <a href="https://yingzehou.gitbook.io/docs/" className="navItem" target="_blank">Blog</a>
                </div>
            </div>
        </div>
    )
}