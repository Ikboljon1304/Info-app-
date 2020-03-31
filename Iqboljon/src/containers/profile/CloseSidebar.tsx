import React, { Fragment, useState } from "react";
import NavIcon from "../../img/NavIcon";
import { navIcon } from "../Sidebar/Sidebar.styles";



const Sidebar1 = (props: any) => {
    const [sidebarClass, setSidebarClass] = useState(props.sidebar)

    const closeHandler = (e: any) => {
        e.preventDefault()
        setSidebarClass("sidebar close")
        props.close()
    }

    return (
        <Fragment>
            <div className={sidebarClass}>
            <ul onClick={closeHandler}>
                <span> <NavIcon className={navIcon}/></span>
            </ul>
            </div>
        </Fragment>
    )
}

export default Sidebar1;