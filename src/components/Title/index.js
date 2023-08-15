import React from "react";


import { H1 } from './styles'
function Title({children, isMargin}){

    return <H1 isMargin={isMargin}>{children}</H1>
}

export default Title