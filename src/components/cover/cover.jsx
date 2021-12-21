import "./cover.scss"
import {Email, GitHub, LinkedIn, Person, Phone} from '@mui/icons-material';
import WechatCode from "../image/image";

export default function Cover({QRopen, setQRopen}) {
    return (
        <div className="cover" id="cover">
            <div className="name">
                Yingze Hou
            </div>
            <div className="wechatcode">
                {QRopen ? <WechatCode QRopen={QRopen} setQRopen={setQRopen}/> : null}
            </div>
            <div className={"infotag " + (QRopen && "active")}>
                <div className="itemContainer">
                    <Email className="icon"/>
                    <span>
                        <a href="mailto:yhou63@wisc.edu">yhou63@wisc.edu</a>
                    </span>
                </div>
                <div className="itemContainer">
                    <Phone className="icon"/>
                    <span>
                        <a href="sms:6089492721">+16089492721</a>
                    </span>
                </div>
                <div className="itemContainer">
                    <GitHub className="icon"/>
                    <span>
                        <a href="https://github.com/YingzeHou">GitHub</a>
                    </span>
                </div>
                <div className="itemContainer">
                    <LinkedIn className="icon"/>
                    <span>
                        <a href="https://www.linkedin.com/in/yingze-hou-1630971b1/">LinkedIn</a>
                    </span>
                </div>
                <div className="itemContainer">
                <svg className="iconW" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="#9D9D9D"><path d="M21.502 19.525c1.524-1.105 2.498-2.738 2.498-4.554 0-3.326-3.237-6.023-7.229-6.023s-7.229 2.697-7.229 6.023c0 3.327 3.237 6.024 7.229 6.024.825 0 1.621-.117 2.36-.33l.212-.032c.139 0 .265.043.384.111l1.583.914.139.045c.133 0 .241-.108.241-.241l-.039-.176-.326-1.215-.025-.154c0-.162.08-.305.202-.392zm-12.827-17.228c-4.791 0-8.675 3.236-8.675 7.229 0 2.178 1.168 4.139 2.997 5.464.147.104.243.276.243.471l-.03.184-.391 1.458-.047.211c0 .16.13.29.289.29l.168-.054 1.899-1.097c.142-.082.293-.133.46-.133l.255.038c.886.255 1.842.397 2.832.397l.476-.012c-.188-.564-.291-1.158-.291-1.771 0-3.641 3.542-6.593 7.911-6.593l.471.012c-.653-3.453-4.24-6.094-8.567-6.094zm5.686 11.711c-.532 0-.963-.432-.963-.964 0-.533.431-.964.963-.964.533 0 .964.431.964.964 0 .532-.431.964-.964.964zm4.82 0c-.533 0-.964-.432-.964-.964 0-.533.431-.964.964-.964.532 0 .963.431.963.964 0 .532-.431.964-.963.964zm-13.398-5.639c-.639 0-1.156-.518-1.156-1.156 0-.639.517-1.157 1.156-1.157.639 0 1.157.518 1.157 1.157 0 .638-.518 1.156-1.157 1.156zm5.783 0c-.639 0-1.156-.518-1.156-1.156 0-.639.517-1.157 1.156-1.157.639 0 1.157.518 1.157 1.157 0 .638-.518 1.156-1.157 1.156z"/></svg>
                    <span>
                        <div onClick={()=>setQRopen(!QRopen)}>&nbsp;Wechat</div>
                    </span>
                </div>
            </div>
        </div>
    )
}
