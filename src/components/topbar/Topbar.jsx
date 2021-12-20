import "./topbar.scss"

export default function Topbar(){
    return(
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#cover" className="logo">Portfolio</a>
                </div>
                <div className="right">
                    <a href="#intro" className="navItem">Introduction</a>
                    <a href="#intro" className="navItem">Education</a>
                    <a href="#intro" className="navItem">Experience</a>
                    <a href="https://yingzehou.gitbook.io/docs/" className="navItem">Blog</a>
                </div>
            </div>
        </div>
    )
}