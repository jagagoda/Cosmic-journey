import axios from "axios";

const Api = {
    getCrew() {
        return axios
            .get("https://api.spacexdata.com/v4/crew");
    },

    getCapsules() {
        return axios
            .get("https://api.spacexdata.com/v4/capsules");
    },

    getRockets() {
        return axios
            .get("https://api.spacexdata.com/v4/rockets");
    },

    getStarlink() {
        return axios
            .get("https://api.spacexdata.com/v4/starlink");
    }
}

export default Api;
