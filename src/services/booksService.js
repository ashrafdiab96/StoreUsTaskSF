import apiUrls from "@/helpers/api";
import axios from "axios";

const booksService = {
    /* books */
    getBooks: () => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.books}`,
        );
    },

    getBook: (id) => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.books}/${id}`, 
        );
    },

    createBook: (data) => {
        return axios.post(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.books}`,
            data,
            {
                'Content-Type': 'multipart/form-data'
            }
        );
    },

    updateBook: (data) => {
        return axios.put(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.books}/${data?.id}`,
            data?.payload,
            {
                'Content-Type': 'multipart/form-data'
            }
        );
    },

    deleteBook: (id) => {
        return axios.delete(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.books}/${id}`, 
        );
    },

    writers: () => {
        return axios.get(
            process.env.NEXT_PUBLIC_API_URL + `${apiUrls.writers}`, 
        );
    },

};

export default booksService;
