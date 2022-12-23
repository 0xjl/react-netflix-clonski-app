/* imports the package/module installed via NPM i axios */
import axios from "axios";

/* base url to make requests to the movie database */
/* create an instance */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;