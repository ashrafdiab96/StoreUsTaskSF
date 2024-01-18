import apiUrls from "@/helpers/api";
import axios from "axios";

const authServices = {
    login: (data) => {
        return axios.post(
            process.env.NEXT_PUBLIC_API_URL + apiUrls.token,
            {
                ...data,
            },
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
    },

    logout: () => {
        return axios.post(
            process.env.NEXT_PUBLIC_API_URL + apiUrls.logout,
        );
    },
};

export default authServices;
