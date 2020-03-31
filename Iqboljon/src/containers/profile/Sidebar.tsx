import React from "react";
import { whole, head, body1, navP, div, line, tableIcon, navTableP} from "../Sidebar/Sidebar.styles";
import Union from "../../img/Union.png";
import Table from "../../img/Table.png";

interface ISidebarProps {}

const Sidebar: React.FC<ISidebarProps> = (props: any) => {


    return (
        <div className={whole}>
            <div className={head}>
                <p className={navP}>proceset</p>
            </div>
            <div className={body1}>
                <div className={div}>
                <div className={line}>
                    <img src={Union} alt="" className={tableIcon} />
                    <p className={navTableP}>Username</p>
                </div>
                <div className={line}>
                    <img src={Table} alt="" className={tableIcon} />
                    <p className={navTableP}>Список процессов</p>
                </div>
                </div>
            </div>
            </div>
    )
}

export default Sidebar;