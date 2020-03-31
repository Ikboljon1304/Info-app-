import React, { Fragment } from "react";
import NavIcon from "../../img/NavIcon";
import { navIcon1 } from "../Sidebar/Sidebar.styles";


const Toggle = (props: any) => {
    return(
        <Fragment>
            <ul className={navIcon1} onClick={props.click}>
                <span> <NavIcon className={navIcon1}/></span>
            </ul>
        </Fragment>
    )
}


export default Toggle;