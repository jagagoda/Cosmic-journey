import React, {useState} from "react";
import Details from "../SpaceData/CapsuleList";
import './_api.scss';
import CrewList from "../SpaceData/CrewList";
import Api from "../../../api";

const ApiCrew = () => {
    const [error, setError] = useState("");
    const [crew, getCrew] = useState([]);

    const getDataCrew = () => {
        Api.getCrew()
            .then(response => {
                console.log("res", response.data);
                getCrew(response.data);
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


export default ApiCrew
