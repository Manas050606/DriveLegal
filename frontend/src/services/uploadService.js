import axios from "axios";


// ==============================================
// API BASE URL
// ==============================================

const API_BASE_URL =

    import.meta.env.VITE_API_URL ||

    "http://localhost:8000/api";


// ==============================================
// AXIOS INSTANCE
// ==============================================

const api = axios.create({

    baseURL: API_BASE_URL,

    headers: {

        "Content-Type":
            "multipart/form-data"
    }
});


// ==============================================
// UPLOAD DOCUMENT
// ==============================================

export const uploadDocument = async (

    file

) => {

    try {

        const formData = new FormData();

        formData.append(

            "file",

            file
        );

        const response = await api.post(

            "/upload/document",

            formData
        );

        return response.data;

    } catch (error) {

        console.error(

            "Document Upload Error:",

            error
        );

        throw error;
    }
};


// ==============================================
// NUMBER PLATE OCR
// ==============================================

export const uploadNumberPlate = async (

    file

) => {

    try {

        const formData = new FormData();

        formData.append(

            "file",

            file
        );

        const response = await api.post(

            "/upload/number-plate",

            formData
        );

        return response.data;

    } catch (error) {

        console.error(

            "Number Plate Upload Error:",

            error
        );

        throw error;
    }
};


// ==============================================
// DELETE FILE
// ==============================================

export const deleteUploadedFile = async (

    filename

) => {

    try {

        const response = await api.delete(

            `/upload/delete/${filename}`
        );

        return response.data;

    } catch (error) {

        console.error(

            "Delete File Error:",

            error
        );

        throw error;
    }
};


// ==============================================
// HEALTH CHECK
// ==============================================

export const checkUploadHealth = async () => {

    try {

        const response = await api.get(

            "/upload/health"
        );

        return response.data;

    } catch (error) {

        console.error(

            "Upload Service Error:",

            error
        );

        throw error;
    }
};