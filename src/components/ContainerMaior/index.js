import React from "react";

import { ContainerMaior } from "./styles";

function Container({children, ...props}){


    return <ContainerMaior {...props}>{children}</ContainerMaior>
}


export default Container