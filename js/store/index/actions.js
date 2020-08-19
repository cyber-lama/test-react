import {
    apiGetRregion,
    apiGetCity,
    apiGetDepartment,
} from "../../services/Api";

export function setActionData(actionVar, actionData) {
    return {
        type: 'ACTIONS',
        payload: {
            var: actionVar,
            val: actionData
        }
    };
}

export const getRegion = () => {
    return (dispatch) => {
        apiGetRregion()
            .then((r) => {
                    if (r.data) {
                        dispatch(setActionData("region", r.data));
                    }
                }
            )
            .catch((e) => {
                if (e.response) {
                    checkError(e.response);
                }
            })
    }
};


export const getCity = (id) => {
    return (dispatch) => {
        const data = {
            region: id
        };
        apiGetCity(data)
            .then((r) => {
                    if (r.data) {
                        dispatch(setActionData("city", r.data));
                        dispatch(setActionData("departmentAction", "ShowCitySearch"));
                    }
                }
            )
            .catch(() => {
            })
    }
};

export const getDepartment = (id) => {
    return (dispatch) => {
        const data = {
            city_id: id
        };
        apiGetDepartment(data)
            .then((r) => {
                    if (r.data) {
                        dispatch(setActionData("departments", r.data));
                        dispatch(setActionData("departmentAction", "ShowDepartmentSearch"));
                        dispatch(setActionData("selectedCity", r.data[0].name));
                    }
                }
            )
            .catch((e) => {
                if (e.response) {
                    checkError(e.response);
                }
            })
    }
};