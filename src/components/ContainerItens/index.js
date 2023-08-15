import React from "react";

import { ContainerItens as Wrapper } from "./styles";

function ContainerItens({children, ...props}){


    return <Wrapper {...props}>{children}</Wrapper>
}


export default ContainerItens