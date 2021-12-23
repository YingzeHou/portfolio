import React from 'react'
import "./skill.scss"
import {skillList } from '../../skillData'
import { Image, StyleSheet } from "react-native-web"

export default function Skill() {
    const styles = StyleSheet.create({
        container: {
          paddingTop: 50,
        },
        tinyLogo: {
          width: 45,
          height: 45,
          margin:4
        },
        logo: {
          width: 110,
          height:110,
          borderRadius: 40,
          margin: 10
        },
    });
    return (
        <div className="skill" id='skill'>
            {skillList.map((skill)=>(
                <div className="container">
                <div className="type">
                    {skill.type}
                </div>
                <div className="imgContainer">
                    {skill.images.map((s)=>(
                        <Image
                            style={styles.logo}
                            source={s}
                            resizeMode="contain"
                        />
                    ))}
                </div>
                <div className="mobileContainer">
                    {skill.images.map((s)=>(
                        <Image
                            style={styles.tinyLogo}
                            source={s}
                            resizeMode="contain"
                        />
                    ))}
                </div>
            </div>
            ))}
        </div>
    )
}
