import React from "react";
import {renderData} from "../../helpers/helpers";
import "../componentsStyles/citySearch.scss";

export default function (props) {
    const city = props.index.city !== undefined ? props.index.city : "";
    return (
        <ul className="city__list">
            {renderData(city, "city", "name", "", "", props.getDepartment, ["id", "name"],null)}
        </ul>
    )
};
