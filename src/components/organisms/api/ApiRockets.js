import React, {useState} from "react";
import './_api.scss';
import Api from "../../../api";

const ApiRockets = () => {
    const [error, setError] = useState("");
    const [rockets, getRockets] = useState([]);
    // const [isFetchingData, setIsFetchingData] = useState(false);

    const getDataRockets = () => {
        Api.getRockets()
            .then(response => {
                console.log("res", response.data);
                getRockets(response.data.height);
            })
            .catch(error => {
                console.log("Error: ", error);
                setError(error);
            });
    };

    return (
        <>
        </>
    );
};


export default ApiRockets
