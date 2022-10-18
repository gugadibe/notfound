import { MapTo } from "@adobe/aem-react-editable-components";
import React from 'react';

const CustomTextEditConfig = {
    emptyLabel: "Insert Text",
    isEmpty: (props) => {
        return !props || !props.text;
    },
};

const CustomText = ({text}) => {
    return (
        <div>
            <p>{text}</p>
        </div>
    );
};
export default MapTo("notfound/components/custom-react-text")(CustomText, CustomTextEditConfig);
