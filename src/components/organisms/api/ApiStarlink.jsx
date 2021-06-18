import React, {useState} from "react";
import './_api.scss';
import Api from "../../../api";


const ApiStarlink = () => {
    const [error, setError] = useState("");
    const [starlink, getStarlink] = useState([]);

    const getDataStarlink = () => {
        Api.getStarlink()
            .then(response => {
                console.log("res", response.data);
                getStarlink(response.data);
            })
            .catch(error => {
                console.log("Error: ", error);
                setError(error);
            });
    };
};


export default ApiStarlink
