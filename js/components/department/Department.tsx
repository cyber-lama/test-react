import React, {useEffect} from "react";
import RegionSearchContainer from "../../wrappedComponents/RegionSearchContainer";
import CitySearchContainer from "../../wrappedComponents/CitySearchContainer";
import DepartmentSearchContainer from "../../wrappedComponents/DepartmentSearchContainer";
import Button from "../pieces/Button";
import '../../../scss/components/department/department.scss';

export default function Department(props) {
    const data = props.index;
    const departmentAction = data.departmentAction !== undefined ? data.departmentAction : "";
    const back = (departmentAction) => {
        data.selectedCity = undefined;
        if (departmentAction === "ShowRegionSearch") {
            return props.setActionData("departmentAction", undefined)
        } else if (departmentAction === "ShowCitySearch") {
            return props.setActionData("departmentAction", "ShowRegionSearch")
        } else if (departmentAction === "ShowDepartmentSearch") {
            return props.setActionData("departmentAction", "ShowCitySearch")
        }
    };
    return (
        <>
            <section className="departments">
                <h3 className="departments__title">Погашение задолженности</h3>
                <div className="departments__btn_background">
                    <Button
                        className="departments__btn-select"
                        text={
                            data.selectedCity !== undefined ? data.selectedCity : "Выбрать регион"
                        }
                        onClick={() => props.setActionData("departmentAction", "ShowRegionSearch")}
                    />
                </div>
                {departmentAction === "ShowRegionSearch" ? <RegionSearchContainer/> : null}
                {departmentAction === "ShowCitySearch" ? <CitySearchContainer/> : null}
                {departmentAction === "ShowDepartmentSearch" ? <DepartmentSearchContainer/> : null}

                <Button
                    className="departments__btn-back"
                    text="Вернуться назад"
                    onClick={() => departmentAction ? back(departmentAction) : window.history.back()}
                />
            </section>
        </>
    )
};
