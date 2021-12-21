import "./image.scss"
import code from "../../asset/code.jpg"

export default function WechatCode({QRopen, setQRopen}) {
    return (
        <div className="WechatCode">
            <div className={"codeBox " + (!QRopen && "active")}>
                <div className="close" onClick={()=>setQRopen(!QRopen)}>
                    x
                </div>
                <div className="desc">
                    Wechat QR Code
                </div>
                <img src={code} alt="code"/>
            </div>
        </div>
    )
}
