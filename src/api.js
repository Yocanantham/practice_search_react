import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/photos", {
        headers: {
            Authorization:
                "Client-ID vdvXDe1-inKmdC7DOTvymrw_57xcuY41EwmPejr6Jj0",
        },
        params: {
            query: term,
        },
    });
    return response.data;
};

export default searchImages;
