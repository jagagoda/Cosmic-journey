import React, {useState} from "react";
import './_api.scss';
import Api from "../../../api";

const ApiCapsules = () => {
    const [error, setError] = useState("");
    const [capsules, getCapsules] = useState([]);

    const getDataCapsules = () => {
        Api.getCapsules()
            .then(response => {
                console.log("res", response.data);
                getCapsules(response.data);
            })
            .catch(error => {
                console.log("Error: ", error);
                setError(error);
            });
    };


};


export default ApiCapsules
