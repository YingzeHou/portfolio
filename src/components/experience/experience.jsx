import "./experience.scss"
import { Image, StyleSheet } from "react-native-web"
import {expList} from "../../expData.js"
import { subList } from "../../subExpData"
import { useState, useEffect } from "react"
import { Fade, LightSpeed, Roll } from "react-reveal"

export default function Experience() {
    const [data, setData] = useState([])
    const [cardSelect, setCardSelect] = useState(0);
    const styles = StyleSheet.create({
        container: {
          paddingTop: 50,
        },
        tinyLogo: {
          width: 50,
          height: 50,
        },
        logo: {
          width: 150,
          height:150,
          borderRadius: 40,
        },
    });
    useEffect(() => {
        
        switch(cardSelect){
            case 1:
                setData(expList[0]);
                break;
            case 2:
                setData(expList[1]);
                break;
            case 3:
                setData(expList[2]);
                break;
            case 4:
                setData(expList[3]);
                break;
            case 5:
                setData(expList[4]);
                break;
        }
    }, [cardSelect])
    return (
        <div className={cardSelect>0? "experience blur": "experience"} id="experience">
            <h1>Experiences</h1>
            <div className={cardSelect>0? "introBox active": "introBox"}>
                <div className="introContainer">
                    <div className="intro">
                        {data.desc1}
                        <br />
                        <br />
                        {data.desc2}
                        <br />
                        <br />
                        {data.desc3}
                        <br />
                        <br />
                        {data.desc4}
                    </div>
                    <a href={data.link1} target="_blank">{data.text1}</a>
                    <a href={data.link2} target="_blank">{data.text2}</a>
                    <button onClick={()=>setCardSelect(0)}>Close</button>
                </div>
            </div>

            <Roll top>
            <div className="container">
            {expList.map((l)=>(
                <div className="item" onClick={()=>setCardSelect(l.id)}>
                    <div className="image">
                        <Image
                            style={styles.logo}
                            source={l.src}
                            resizeMode="contain"
                        />
                    </div>
                    <div className="time">
                        {l.time}
                        <br />
                        {l.addr}
                    </div>
                    <h3>{l.title}</h3>
                    <h2>{l.position}</h2>
                </div>
                ))}
            </div>
            </Roll>
            <LightSpeed left>
            <div className="subTaskContainer">
                {subList.map((sub)=>(
                    <div className="subItem">
                    <h2>{sub.desc}</h2>
                    <h3>{sub.title}</h3>
                </div>
                ))}
            </div>
            </LightSpeed>
            
        </div>
    )
}
