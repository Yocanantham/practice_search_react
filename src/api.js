import axios from "axios";

let term = "cars";
const searchImages = async () => {
    const response = await axios.get("https://api.unsplash.com/photos", {
        headers: {
            Authorization:
                "Client-ID vdvXDe1-inKmdC7DOTvymrw_57xcuY41EwmPejr6Jj0",
        },
        params: {
            query: term,
        },
    });

    console.log(response);
};

export default searchImages;
