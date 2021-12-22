import "./experience.scss"
import meituan from "../../asset/meituan.png"
import xunxiang from "../../asset/xunxiang.svg"
import { Image, StyleSheet } from "react-native-web"

export default function Experience() {
    const styles = StyleSheet.create({
        container: {
          paddingTop: 50,
        },
        tinyLogo: {
          width: 50,
          height: 50,
        },
        logo: {
          width: 200,
          height: 200,
        },
    });

    const list = [
        {
            id:1,
            src: meituan,
        },
        {
            id:2,
            src: xunxiang,
        }
    ]
    return (
        <div className='experience'>
            <div className="imgContainer">
                {list.map((l)=>(
                    <Image
                    style={styles.logo}
                    source={l.src}
                />
                ))}
            </div>
        </div>
    )
}
