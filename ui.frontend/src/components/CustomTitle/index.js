import { MapTo } from "@adobe/aem-react-editable-components";
import React from 'react';

const CustomTitleEditConfig = {
    emptyLabel: "Insert Text",
    isEmpty: (props) => {
        return !props || !props.text;
    },
};

const CustomTitle = ({text}) => {
    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
};
export default MapTo("notfound/components/custom-react-title")(CustomTitle, CustomTitleEditConfig);
