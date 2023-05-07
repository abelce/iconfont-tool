import React from "react";

import { IconCreatorProps } from "./types";

const IconComponent = (props: IconCreatorProps): JSX.Element => {
    const {component: Component} = props;
    return <span className="icon ">
        {<Component />}
    </span>
}

export default IconComponent;